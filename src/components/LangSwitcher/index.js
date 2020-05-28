import React, { useContext } from 'react'
import propTypes from 'prop-types'
import { LanguageContext } from '../../contexts/LanguageContext'
import Index from '../LangSwitcherButton'

export const LangSwitcher = ({ languages }) => {
    const { lang, setLang } = useContext(LanguageContext)

    const updateCurrentLanguage = lang => setLang(lang)

    return (
        <div className="lang-switcher">
            { Object.keys(languages).map(language => (
                <Index
                    key={language}
                    value={languages[language]}
                    onClick={updateCurrentLanguage}
                    active={lang === languages[language]}
                    label={language}
                />
            )) }
        </div>
    )
}

LangSwitcher.propTypes = {
    languages: propTypes.objectOf(propTypes.string).isRequired
}
