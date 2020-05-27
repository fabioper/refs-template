import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import { LangSwitcher } from '../components/LangSwitcher'

const Home = () => {
    const { lang } = useContext(LanguageContext)

    return (
        <React.Fragment>
            Linguagem atual é: {lang}
            <LangSwitcher languages={['pt', 'en', 'es']} />
        </React.Fragment>
    )
}

export default Home
