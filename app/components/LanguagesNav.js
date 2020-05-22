import React from 'react'
import PropTypes from 'prop-types'

function LanguagesNav({ selected, languages, onUpdateLanguage }) {  
    return (
        <ul className="flex-center">
            {languages.map(language => (
                <li key={language}>
                    <button 
                        className="btn-clear nav-link"
                        onClick={() => onUpdateLanguage(language)}
                        style={{ color: selected === language ? '#BB2E1F' : 'inherit' }}
                    >
                        {language}
                    </button>
                </li>
            ))}
        </ul>
    )
}

LanguagesNav.propTypes = {
    selected: PropTypes.string.isRequired,
    languages: PropTypes.array.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired
}

export default LanguagesNav