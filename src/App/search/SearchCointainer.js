import { React } from 'react';
import SearchComponent from './SearchComponent';

const SearchContainer = ( props ) => {

    const handleInputChange = (event) => {
        props.setQuery(event.target.value);
    }

    return(
        <SearchComponent handleInputChange={handleInputChange}/>
    );
}

export default SearchContainer;