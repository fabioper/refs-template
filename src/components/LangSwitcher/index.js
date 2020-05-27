import React, { useContext } from 'react'
import propTypes from 'prop-types'
import { LanguageContext } from '../../contexts/LanguageContext'

export const LangSwitcher = ({ languages }) => {
    const { lang, setLang } = useContext(LanguageContext)

    const updateCurrentLanguage = lang => setLang(lang)

    return (
        <div className="lang-switcher">
            { languages.map(language => (
                <button
                    className={`lang-switcher__button ${lang === language ? 'active' : ''}`}
                    key={language}
                    onClick={() => updateCurrentLanguage(language)}>
                    { language }
                </button>
            )) }
        </div>
    )
}

LangSwitcher.propTypes = {
    languages: propTypes.arrayOf(propTypes.string)
}
