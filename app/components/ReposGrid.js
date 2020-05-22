import React from 'react'
import PropTypes from 'prop-types'
import GridItem from './GridItem'

function renderGrid(repos) {
    return repos.map((repo, index) => {
        const { id, owner, name, html_url, forks, stargazers_count, open_issues } = repo
        return (
            <GridItem 
                key={id}
                index={index + 1}
                image={owner.avatar_url}
                login={owner.login}
                name={name}
                link={html_url}
                forks={forks}
                stars={stargazers_count}
                issues={open_issues}
            />
        )
    })
}

function ReposGrid({ repos, error }) {
    return (
        <ul className="grid space-around">
            {repos ? renderGrid(repos) : error}
        </ul>
    )
}

ReposGrid.propTypes = {
    repos: PropTypes.array.isRequired
}

export default ReposGrid