import React from 'react';
import './search.style.css';

export const SearchBox = ({ placeholder, onChangeHandler}) => {
  return (
    <input type="search"
    className="search" 
    placeholder={placeholder}
    onChange={onChangeHandler}/>
  );
}
