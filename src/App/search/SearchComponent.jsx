import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchContainer = ( props ) => {
    return(
        <div>
            <Input 
            fluid
            icon='search' 
            onChange={props.handleInputChange}
            placeholder='Search by name or by company...'/>
        </div>
    );
}

export default SearchContainer;