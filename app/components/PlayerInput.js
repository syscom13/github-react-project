import React from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from '../contexts/theme'

class PlayerInput extends React.Component {
    state = {
        username: ''
    }

    handleChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()
        this.props.onSubmit(this.state.username)
    }

    render () {
        return (
            <ThemeConsumer>
                {({ theme }) => (
                    <form className="column player" onSubmit={this.handleFormSubmit}>
                        <label htmlFor="username" className="player-label">
                            {this.props.label}
                        </label>
                        <div className="row player-inputs">
                            <input 
                                type="text"
                                id="username" 
                                className={`input-${theme}`}
                                placeholder="github username"
                                autoComplete="off"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                            <button
                                className={`btn btn-${theme === 'light' ? 'dark' : 'light'}`}
                                type="submit"
                                disabled={!this.state.username}
                                onClick={this.handleFormSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </ThemeConsumer>
        )
    }
}

PlayerInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default PlayerInput