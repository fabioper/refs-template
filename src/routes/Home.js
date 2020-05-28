import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import { LangSwitcher } from '../components/LangSwitcher'
import useFetch from '../hooks/useFetch'

const Home = () => {
    const { lang } = useContext(LanguageContext)
    const posts = useFetch('posts', lang)
    const defaultLanguages = { pt: '', en: 'en', es: 'es' }

    return (
        <React.Fragment>
            Linguagem atual é: {lang}
            <LangSwitcher languages={defaultLanguages} />

            <div className="posts">
                { !posts ? <div className="loader">Carregando posts...</div> :
                    posts.map(post => (
                        <a href={post.slug} className="post" key={post.id}>
                            <h4 className="post__title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </a>
                    ))
                }
            </div>
        </React.Fragment>
    )
}

export default Home
