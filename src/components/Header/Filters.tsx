import { useState } from "react";
import "./filters.css";
export const Filters = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="filters">
      <button
        className={`filterButton ${selectedFilter === "All" ? "active" : ""}`}
        onClick={() => handleFilterClick("All")}
      >
        All
      </button>
      <button
        className={`filterButton ${
          selectedFilter === "Active" ? "active" : ""
        }`}
        onClick={() => handleFilterClick("Active")}
      >
        Active
      </button>
      <button
        className={`filterButton ${
          selectedFilter === "Completed" ? "active" : ""
        }`}
        onClick={() => handleFilterClick("Completed")}
      >
        Completed
      </button>
    </div>
  );
};
