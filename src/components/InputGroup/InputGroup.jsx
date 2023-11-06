import { useEffect, useState } from 'react';
import './input-group.css'
const InputGroup = (props) => {

    const [language, setLanguage] = useState('')
    const [currency, setCurrency] = useState('')
    const [region, setRegion] = useState('')
    const [name, setName] = useState('')

    const [disabled, setDisabled] = useState({ lang: false, curr: false, reg: false, nm: false })

    const [data, setData] = useState([])

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value)
    }

    useEffect(() => {
        setCurrency('')
        setRegion('')
        setName('')
        if (language == '') {
            setDisabled({ lang: false, curr: false, reg: false, nm: false })
        } else {
            setDisabled({ lang: false, curr: true, reg: true, nm: true })
        }
    }, [language])

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value)
    }

    useEffect(() => {
        setLanguage('')
        setRegion('')
        setName('')

        if (currency == '') {
            setDisabled({ lang: false, curr: false, reg: false, nm: false })
        } else {
            setDisabled({ lang: true, curr: false, reg: true, nm: true })
        }
    }, [currency])

    const handleRegionChange = (event) => {
        setRegion(event.target.value)
    }

    useEffect(() => {
        setLanguage('')
        setCurrency('')
        setName('')
        if (region == '') {
            setDisabled({ lang: false, curr: false, reg: false, nm: false })
        } else {
            setDisabled({ lang: true, curr: true, reg: false, nm: true })
        }
    }, [region])

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    useEffect(() => {
        setLanguage('')
        setCurrency('')
        setRegion('')
        if (name == '') {
            setDisabled({ lang: false, curr: false, reg: false, nm: false })
        } else {
            setDisabled({ lang: true, curr: true, reg: true, nm: false })
        }
    }, [name])

    const handleClick = () => {
        try {
            if (language) {
                fetch('https://restcountries.com/v3/lang/' + language)
                    .then((response) => {
                        if (response.ok) {
                            return response.json()
                        }
                        throw new Error('No language found')
                    })
                    .then(resp => { setData(resp) })
                    .catch(() => setData(['error']))
            } else if (currency) {
                fetch('https://restcountries.com/v3/currency/' + currency)
                    .then((response) => {
                        if (response.ok) {
                            return response.json()
                        }
                        throw new Error('No currency found')
                    })
                    .then(resp => { setData(resp) })
                    .catch(() => setData(['error']))
            } else if (region) {
                fetch('https://restcountries.com/v3/region/' + region)
                    .then((response) => {
                        if (response.ok) {
                            return response.json()
                        }
                        throw new Error('No region found')
                    })
                    .then(resp => { setData(resp) })
                    .catch(() => setData(['error']))
            } else if (name) {
                fetch('https://restcountries.com/v3/name/' + name)
                    .then((response) => {
                        if (response.ok) {
                            return response.json()
                        }
                        throw new Error('No countries found by that name')
                    })
                    .then(resp => { setData(resp) })
                    .catch(() => setData(['error']))
            } else {
                setData([])
            }
        } catch (error) {
            setData(['error'])
            console.log('error')
        }
    }

    const clear = () => {
        setData([])
        setLanguage('')
        setCurrency('')
        setRegion('')
        setName('')
    }

    useEffect(() => {
        if (data) {
            props.func(data)
        }
    }, [data, props])

    return (
        <div className='form'>
            <div className='inputs'>
                <div className="input-field">
                    <input id="field" type="text" placeholder='Language' onChange={handleLanguageChange} disabled={disabled.lang} value={language} />
                    <p>Ex: spanish</p>
                </div>
                <div className="input-field">
                    <input id="field" type="text" placeholder='Currency' onChange={handleCurrencyChange} disabled={disabled.curr} value={currency} />
                    <p>Ex: usd, peso</p>
                </div>
                <div className="input-field">
                    <input id="field" type="text" placeholder='Region' onChange={handleRegionChange} disabled={disabled.reg} value={region} />
                    <p>Ex: Americas, Asia</p>
                </div>
                <div className="input-field name">
                    <input id="field" type="text" placeholder='Name' onChange={handleNameChange} disabled={disabled.nm} value={name} />
                    <p>placeholder</p>
                </div>
            </div>
            <div className='buttonBox'>
                <div className='button' onClick={handleClick}>
                    <p>Search</p>
                </div>
                <div className='button' onClick={clear}>
                    <p>Clear</p>
                </div>
            </div>
        </div>


    )
}

export default InputGroup;