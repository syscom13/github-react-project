import React from 'react'
import LanguagesNav from './LanguagesNav'
import { fetchPopularRepos } from '../utils/api'
import ReposGrid from './ReposGrid'
import Loading from './Loading'

class Popular extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            languages: ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python', 'Go', 'React', 'Typescript', 'Node'],
            selectedLanguage: 'All',
            repos: null,
            error: null,
            cache: {}
        }

        this.updateLanguage = this.updateLanguage.bind(this)
        this.isLoading = this.isLoading.bind(this)
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage)
    }

    updateLanguage(selectedLanguage) {
        this.setState({
            selectedLanguage,
            error: null,
            repos: null
        })

        if (!this.state.cache[selectedLanguage]) {
            const res = fetchPopularRepos(selectedLanguage)
            res.then(data => {
                this.setState( prevState => {
                    return {
                        repos: data,
                        error: null,
                        cache: { ...prevState.cache, [selectedLanguage]: data }
                    }
                })
            })
            .catch(error => {
                console.warn('Error fetching repos: ', error)
    
                this.setState({
                    error: 'There was an error fetching the repositories'
                })
            })
        } else {
            this.setState({
                repos: this.state.cache[selectedLanguage],
                error: null,
            })
        }

    }

    isLoading() {
        return this.state.repos === null && this.state.error === null
    }

    render() {
        const { selectedLanguage, languages, repos, error } = this.state

        return (
            <React.Fragment>
                <LanguagesNav
                    selected={selectedLanguage}
                    languages={languages}
                    onUpdateLanguage={this.updateLanguage}
                /> 

                {this.isLoading() && <Loading text="Fetching repos" />}

                {error && <p className="center-text error">{error}</p>}

                {repos && <ReposGrid repos={repos} error={error} />}
            </React.Fragment>
        )
    }
}

export default Popular