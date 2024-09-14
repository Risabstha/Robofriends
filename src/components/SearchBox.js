import React from 'react';
import './SearchBox.css';

function SearchBox({Searchfield,searchChange})
{
    return(
        <div className='tc pa2'>
        <input  className='pa3 tc ' 
                type='search' 
                placeholder='Search Bar' 
                onChange={searchChange} 
        />
        </div>
    );
}
export default SearchBox;