const id = "2ea086ed2c655c95313b"
const sec = "ad7d68a13520e5eac2251dc766b75acf52528fd3"
const params = `?client_id=${id}&client_secret=${sec}`


export function fetchPopularRepos(language) {
    const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)

    return fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            if (!data.items) {
                throw new Error(data.message)
            }
            return data.items
        })
}

function getRepos(username) {
    const endpoint = window.encodeURI(`https://api.github.com/users/${username}/repos${params}&per_page=100`)

    return fetch(endpoint)
        .then(res => res.json())
        .then(repos => {
            if (repos.message) {
                throw new Error(getErrorMessage(repos.message, username))
            }

            return repos
        })
}

function getProfile(username) {
    const endpoint = window.encodeURI(`https://api.github.com/users/${username}${params}`)

    return fetch(endpoint)
        .then(res => res.json())
        .then(profile => {
            if (profile.message) {
                throw new Error(getErrorMessage(profile.message, username))
            }

            return profile
        })
}

function getUserData(player) {
    return Promise.all([
        getProfile(player),
        getRepos(player)
    ]).then(([ profile, repos ]) => ({
        profile,
        score: calculateScore(profile.followers, repos)
    }))
}

export function battle(players) {
    return Promise.all([
        getUserData(players[0]),
        getUserData(players[1])
    ]).then(results => sortPlayers(results))
}


/*  ############## Utility Functions ############## */

function sortPlayers(players) {
    return players.sort((a, b) => b.score - a.score)
}

function getErrorMessage(message, username) {
    if (message === 'Not Found') {
        return `${username} does not exist`
    }

    return message
}

function getStarCount(repos) {
    return repos.reduce((acc, curr) => {
        return acc + curr.stargazers_count
    }, 0)
}

function calculateScore(followers, repos) {
    return (followers * 3) + getStarCount(repos)
}