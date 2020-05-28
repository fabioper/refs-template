import React from 'react'
import Home from './routes/Home'
import LanguageContextProvider from './contexts/LanguageContext'

const App = () => (
    <LanguageContextProvider defaultValue="">
        <Home />
    </LanguageContextProvider>
)

export default App
