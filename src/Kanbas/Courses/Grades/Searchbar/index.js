import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsChevronDown } from "react-icons/bs";
import "./index.css";

function SearchBar({placeholder}) {
  return (
    <div className="custom-search-bar">
      <div className="search-icon">
        <HiMagnifyingGlass />
      </div>
      <input
        type="text"
        className="form-control border-0"
        placeholder = {placeholder}
      />
      <div className="chevron-icon">
        <BsChevronDown />
      </div>
    </div>
  );
}

export default SearchBar;
