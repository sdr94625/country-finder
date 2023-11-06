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

    const itemsPerPage = smallScreen ? 5 : 6;

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
                console.log(i + (currPage * itemsPerPage) - itemsPerPage)
                tempCountries.push(itemList[i + (currPage * itemsPerPage) - itemsPerPage])
                console.log(tempCountries[1])
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
                <div className="prev" onClick={handlePrev}>Prev.</div>
                <div className="next" onClick={handleNext}>Next</div>
            </div>
            <div id="test"></div>
        </div>

    )

}

export default Pagination;