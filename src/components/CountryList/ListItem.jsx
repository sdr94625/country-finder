import { useState } from 'react'
import './country-list.css'
import CountryPopup from './CountryPopup';
const ListItem = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const country = props.country;

    const openPopup = () => {
        setIsOpen(true)
    }

    const closePopup = () => {
        setIsOpen(false)
    }

    return (
        <>
            <div onClick={openPopup} className="listItem">
                <p>{country.name.common}</p>
            </div>

            {isOpen && (
                <CountryPopup
                    title={country.name.common}
                    country={country}
                    closePopup={closePopup}
                />
            )}
        </>
    )

}

export default ListItem