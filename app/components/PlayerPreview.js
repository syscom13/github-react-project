import React from 'react'
import PropTypes from 'prop-types'
import { FaTimesCircle } from 'react-icons/fa'
import { ThemeConsumer } from '../contexts/theme'

function PlayerPreview({ username, onReset, label }) {
    return (
        <ThemeConsumer>
            {({ theme }) => (
                <div className="column player">
                    <h3 className="player-label">{label}</h3>
                    <div className={`row bg-${theme}`}>
                        <div className="player-info">
                            <img 
                                src={`https://github.com/${username}.png?size=200`}
                                alt={`Avatar for ${username}`}
                                className="avatar-small"
                            />
                            <a
                                href={`https://github.com/${username}`}
                                className="link"
                            >
                                {username}
                            </a>
                        </div>
                        <button className="btn-clear flex-center" onClick={onReset}>
                            <FaTimesCircle 
                                color="#BB2E1F"
                                size={26} 
                            />
                        </button>
                    </div>
                </div>
            )}
        </ThemeConsumer>
    )
}

PlayerPreview.propTypes = {
    username: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default PlayerPreview