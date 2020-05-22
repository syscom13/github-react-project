import React from 'react'
import Instructions from './Instructions'
import PlayerInput from './PlayerInput'
import PlayerPreview from './PlayerPreview'
import { Link } from 'react-router-dom'


class Battle extends React.Component {
    initialState = {
        playerOne: null,
        playerTwo: null
    }
        
    state = this.initialState

    handleSubmit = (id, playerName) => {
        this.setState({
            [id]: playerName
        })
    }

    handleReset = id => {
        this.setState({
            [id]: null
        })
    }

    render() {
        const { playerOne, playerTwo } = this.state

        return (
            <React.Fragment>
                <Instructions />
                <div className="players-container">
                    <h1 className="center-text header-lg">Players</h1>
                    <div className="row space-around">
                        {playerOne === null 
                            ?   <PlayerInput
                                    label="Player One"
                                    onSubmit={playerName => this.handleSubmit('playerOne', playerName)}
                                />
                                : 
                                <PlayerPreview
                                    label="Player One"
                                    username={playerOne}
                                    onReset={() => this.handleReset('playerOne')}
                                />
                        }

                        {playerTwo === null 
                            ?   <PlayerInput
                                    label="Player Two"
                                    onSubmit={playerName => this.handleSubmit('playerTwo', playerName)}
                                />
                                : 
                                <PlayerPreview
                                    label="Player Two"
                                    username={playerTwo}
                                    onReset={() => this.handleReset('playerTwo')}
                                />
                        }
                    </div>

                    {(playerOne && playerTwo) &&
                        <Link 
                            className="btn btn-dark btn-space"
                            to={{
                                pathname: '/battle/results',
                                search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
                            }}
                        >
                            Battle
                        </Link>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Battle