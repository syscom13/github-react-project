import React from 'react'
import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa'
import Card from './Card'
import Tooltip from './Tooltip'

function GridItem({ index, image, login, name, link, forks, stars, issues }) {
    return (
        <li>
            <Card 
                header={index}
                avatar={image}
                href={link}
                name={name}
            >
                <ul className="card-list">
                    <li>
                        <Tooltip text="Github username">
                            <FaUser color='rgba(255, 191, 116)' size={22} />
                            <a href={`https//github.com/${login}`}>
                                {login}
                            </a>
                        </Tooltip>
                    </li>
                    <li>
                        <FaStar color='rgba(255, 215, 0)' size={22} />
                        {stars.toLocaleString()} stars
                    </li>
                    <li>
                        <FaCodeBranch color='rgba(129, 195, 245)' size={22} />
                        {forks.toLocaleString()} forks
                    </li>
                    <li>
                        <FaExclamationTriangle color='rgba(241, 138, 147)' size={22} />
                        {issues.toLocaleString()} open issues
                    </li>
                </ul>
            </Card>
        </li>
    )
}

export default GridItem