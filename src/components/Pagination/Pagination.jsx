import { useEffect, useState } from "react";
import './pagination.css'

const Pagination = ({ itemList }) => {

    const [currPage, setCurrPage] = useState(1)
    const [countryList, setCountryList] = useState([])

    const numItems = itemList.length

    //Checks the screen size and sets the items per page accordingly
    function widthCheck(checkedMediaQuery) {
        if (checkedMediaQuery.matches) {
            return true
        } else {
            return false
        }
    }

    const mediaQuery = matchMedia("(max-width: 650px)")
    const smallScreen = widthCheck(mediaQuery)

    const itemsPerPage = smallScreen ? 4 : 6;

    const numPages = (numItems % itemsPerPage) == 0 ? (numItems / itemsPerPage) : (numItems / itemsPerPage + 1)

    const handlePrev = () => {
        if (currPage > 1) {
            setCurrPage(currPage - 1)
        }
    }

    const handleNext = () => {
        if (currPage < numPages - 1) {
            setCurrPage(currPage + 1)
        }
    }

    useEffect(() => {
        const tempCountries = []
        for (let i = 0; i < itemsPerPage; i++) {
            if ((i + (currPage * itemsPerPage) - itemsPerPage) < itemList.length) {
                tempCountries.push(itemList[i + (currPage * itemsPerPage) - itemsPerPage])
            }
        }

        setCountryList(tempCountries)
    }, [currPage, itemList])

    return (
        <div className="pagination">
            <div className="list">
                {countryList}
            </div>
            <div className="arrows">
                <div className="prev" onClick={handlePrev}>&larr;</div>
                <div className="next" onClick={handleNext}>&rarr;</div>
            </div>
            <div id="test"></div>
        </div>

    )

}

export default Pagination;