import React from 'react'
import { ThemeConsumer } from '../contexts/theme'
import { NavLink } from 'react-router-dom'

const activeStyle = {
    color: 'rgb(187, 36, 31)'
}

function Nav() {
    return (
        <ThemeConsumer>
            {({ theme, toggleTheme }) => (
                <nav className="row space-between">
                    <ul className="row nav">
                        <li>
                            <NavLink 
                                to="/"
                                exact
                                activeStyle={activeStyle}
                                className="nav-link"
                            >
                                Popular
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/battle" 
                                activeStyle={activeStyle}
                                className="nav-link"
                            >
                                Battle
                            </NavLink>
                        </li>
                    </ul>

                    <button 
                        style={{fontSize: '30px'}}
                        className="btn-clear"
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? '🔦' : '💡'}
                    </button>
                </nav>
            )}
        </ThemeConsumer>
    )
}

export default Nav