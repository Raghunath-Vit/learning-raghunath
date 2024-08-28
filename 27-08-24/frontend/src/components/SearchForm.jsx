import React, {useState} from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "../App.css";



SearchForm.propTypes = {
	onSearchResults: PropTypes.func.isRequired,
};

function SearchForm({onSearchResults}) {
    const [searchType, setSearchType] = useState("name");
    const [searchValue, setSearchValue] = useState("");

    function handleSearch(e) {
        e.preventDefault();

        var url = "";
        switch (searchType) {
            case "name":
                url = `http://localhost:3000/products/productsearch/${searchValue}`;
                break;
            case "price":
                url = `http://localhost:3000/products/price/${searchValue}`;
                break;
            case "availability":
                url = `http://localhost:3000/products/availability/${searchValue}`;
                break;
            default:
                return;
        }

        axios
            .get(url)
            .then(function(response) {
                onSearchResults(response.data);
            })
            .catch(function(error) {
                console.error(error);
            });
    }

    function handleSearchTypeChange(e) {
        setSearchType(e.target.value);
    }

    function handleSearchValueChange(e) {
        setSearchValue(e.target.value);
    }

    return (
        <div className="search-form-container">
            <form onSubmit={handleSearch} className="search-form">
                <div className="search-type-section">
                    <label className="search-label">
                        Search By:
                        <select
                            value={searchType}
                            onChange={handleSearchTypeChange}
                            className="search-select"
                        >
                            <option value="name">Name</option>
                            <option value="price">Price</option>
                            <option value="availability">Availability</option>
                        </select>
                    </label>
                </div>

                <div className="search-input-section">
                    {searchType === "name" && (
                        <input
                            type="text"
                            placeholder="Enter product name"
                            value={searchValue}
                            onChange={handleSearchValueChange}
                            className="search-input" />
                    )}

                    {searchType === "price" && (
                        <input
                            type="number"
                            placeholder="Enter minimum price"
                            value={searchValue}
                            onChange={handleSearchValueChange}
                            className="search-input" />
                    )}

                    {searchType === "availability" && (
                        <select
                            value={searchValue}
                            onChange={handleSearchValueChange}
                            className="search-select"
                        >
                            <option value="">All</option>
                            <option value="available">Available</option>
                            <option value="not-available">Not Available</option>
                        </select>
                    )}
                </div>

                <div className="search-button-section">
                    <button type="submit" className="search-button">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;
