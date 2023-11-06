import './App.css'
import InputGroup from './components/InputGroup/InputGroup'
import CountryList from './components/CountryList/CountryList'
import { useState } from 'react'

function App() {

  const [countries, setCountries] = useState([])

  const passCountries = (data) => {
    setCountries(data);
  }

  return (
    <>
      <div className='header'>
        <h1 className='title'>Country Finder</h1>
        <p>
          Enter currency, language, region, or name to see which countries meet the search criteria.
        </p>
      </div>
      <div className="body">
        <InputGroup func={passCountries} />
        <CountryList countries={countries} />
      </div>
    </>
  )
}

export default App
