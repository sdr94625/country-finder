
function CountryPopup(props) {
    const country = props.country
    return (
        <div>
            <div className="overlay"></div>
            <div className="popup">
                <div className="popupContent">
                    <div className="popupTitle">
                        <img height="" src={country.flags[0]}></img>
                        <h2>{props.title}</h2>
                    </div>
                    <p>Population: {country.population.toLocaleString('en-US')}</p>
                    <p>Capital: {country.capital}</p>
                    <button onClick={props.closePopup}>Close</button>
                </div>
            </div>
        </div >
    );
}

export default CountryPopup;