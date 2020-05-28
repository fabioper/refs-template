import { useEffect, useState } from 'react'

const useFetch = (url, lang = '') => {
    const [data, setData] = useState()
    let domain = 'https://refinariadesign.com.br/wordpress'
    if (lang) domain += `/${lang}`

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch(`${domain}/wp-json/wp/v2/${url}?_embed`)
            if (!response.ok) return
            setData(await response.json())
        }

        loadData()
    }, [data, url, domain])

    return data
}

export default useFetch
