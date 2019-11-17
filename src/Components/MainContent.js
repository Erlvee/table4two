import React, {useState} from 'react'

function MainContent(props) {
    const arr = {Bergen: ["Colonialen 44", "Enhjørningen Restaurant", "Restaurant 1877"]};
    const [value, setValue] = useState('');
    const [savedValue, setSavedValue] = useState('')
    const [searchResult, setSearchResult] = useState('');
    const [searchMessage, setSearchMessage] = useState(false);
    const [renderSearch, setRenderSearch] = useState(null);
    const [initMap, renderMap] = useState(false);

    const handleChange = event => {
        setValue(event.target.value);
        renderMap(false);
        setSearchMessage(false);
        setRenderSearch(false);
    }
    
    const handleSubmit = (event) => {
        if (arr.hasOwnProperty(value)) {
            setRenderSearch(true);
            setSavedValue(value);
            setSearchMessage(!searchMessage);
            setSearchResult("Showing results for ");
        } else if (value === '') {
            setSearchResult('Showing nearby locations');
            
        }
        else {
            setSavedValue(value);
            setSearchMessage(!searchMessage);
            setSearchResult(`No results for`);
        }
        event.preventDefault();
    }

    return (
    <div className="searchBox">
        <h3>Search by <b>city</b> below</h3>
        <form className="searchForm" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search.." value={value} onChange={handleChange}/>
            <button className="searchButton" type="submit"><i className="fa fa-search"></i></button>
            <div id="mapBtn">
                <button onClick={() => renderMap(!initMap)}><i className="fa fa-map-marker fa-2x" aria-hidden="true"></i></button>
            </div>
        </form>
        <div>
            {initMap && <img src="./img/restaurantMap.png" height="325px" width="300px"></img>}
        </div>
        {searchMessage && <p>{searchResult}"{savedValue}"</p>}
        {renderSearch && <div className="searchResultBtn"><button onClick={() => {props.renderMain(!props.initMain); props.renderRestComponent(!props.initRestaurant)}} >Show all places(47)</button> 
        <button >Show by food category (13)</button></div>}
    </div>
    ) 
}

export default MainContent;