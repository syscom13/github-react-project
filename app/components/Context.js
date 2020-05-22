import React from 'react'

const ExpletiveContext = React.createContext('shit')

function ContextualExclamation() {
    return (
        <ExpletiveContext.Consumer>
            {word => <span>Oh {word}!</span>}
        </ExpletiveContext.Consumer>
    )
}

function VisitGrandmasHouse() {
    return (
        <ExpletiveContext.Provider value='poop'>
            <h1>Grandma's house</h1>
            <ContextualExclamation />
        </ExpletiveContext.Provider>
    )
}

function VisitFriendsHouse() {
    return (
        <React.Fragment>
            <h1>Friend's house</h1>
            <ContextualExclamation />
        </React.Fragment>
    )
}

function Context() {
    return(
        <React.Fragment>
            <VisitFriendsHouse />
            <VisitGrandmasHouse />
        </React.Fragment>
    )
}

export default Context
