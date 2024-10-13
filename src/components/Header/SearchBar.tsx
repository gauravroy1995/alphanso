import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import { useCategoryContex } from "../../context/categoryContext";
import { debounce } from "../../utils/debounceUtil"; // Assuming you have a debounce utility
import "./searchBar.css";

export const SearchBar = () => {
  const searchContext = useCategoryContex();
  const { searchString = "", updateSearchString } = searchContext || {};

  const [localSearch, setLocalSearch] = useState(searchString);

  const debouncedUpdateSearchString = debounce((value: string) => {
    if (updateSearchString) {
      updateSearchString(value);
    }
  }, 800);

  useEffect(() => {
    debouncedUpdateSearchString(localSearch);
  }, [localSearch, debouncedUpdateSearchString]);

  return (
    <div className="searchBar">
      <CiSearch className="searchIcon" />
      <input
        type="text"
        placeholder="Search for a task"
        className="mainInput"
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
      />
    </div>
  );
};
