import React from "react";

const SearchBox1 = ({ searchfield, SearchChange }) => {
    return (
        <div>
         <input 
          className="pa3 ba b--green bg-lightest-blue"
          type='search'
          placeholder="search robots" 
          onChange={SearchChange}
          />
          
        </div>
        )
}

export default SearchBox1;