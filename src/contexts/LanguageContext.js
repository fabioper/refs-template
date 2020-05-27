import React, { createContext, useState } from 'react'
import propTypes from 'prop-types'

export const LanguageContext = createContext(null)

const LanguageContextProvider = ({ defaultValue, children }) => {
    const [lang, setLang] = useState(defaultValue)

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            { children }
        </LanguageContext.Provider>
    )
}

LanguageContextProvider.propTypes = {
    defaultValue: propTypes.string.isRequired,
    children: propTypes.element
}

export default LanguageContextProvider
