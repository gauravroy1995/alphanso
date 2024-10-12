import React from "react";
import "./searchBar.css";
import { CiSearch } from "react-icons/ci";

export const SearchBar = () => {
  return (
    <div className="searchBar">
      <CiSearch className="searchIcon" />
      <input
        type="text"
        placeholder="Search for a task"
        className="mainInput"
      />
    </div>
  );
};
