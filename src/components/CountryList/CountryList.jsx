import ListItem from "./ListItem"
import Pagination from "../Pagination/Pagination";
import './country-list.css';

const CountryList = (props) => {

    const countries = props.countries
    console.log(countries)

    if (countries[0] == 'error') {
        return (
            <div className="errorBox">
                <h2>No Countries Found</h2>
            </div>
        )
    }
    const tempList = [];
    countries.map((country) => {
        if (country.independent) {
            tempList.push(<ListItem key={country.cca3} country={country} />)
        }
    })
    return (
        <>
            {countries.length == 0 ? <p></p> :
                <div className="countryList">
                    <div className="listTitle">
                        <h1>Countries</h1>
                    </div>
                    <div className="list">
                        <Pagination itemList={tempList} />
                    </div>
                </div>
            }
        </>
    )
}

export default CountryList