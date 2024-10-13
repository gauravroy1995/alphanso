import { Category, useCategoryContex } from "../../context/categoryContext";
import "./filters.css";
export const Filters = () => {
  const context = useCategoryContex();

  const { categorySelected, updateCategory } = context || {};

  const handleFilterClick = (filter: Category) => {
    if (!updateCategory) return;
    updateCategory(filter);
  };

  return (
    <div className="filters">
      <button
        className={`filterButton ${
          categorySelected === Category.All ? "active" : ""
        }`}
        onClick={() => handleFilterClick(Category.All)}
      >
        All
      </button>
      <button
        className={`filterButton ${
          categorySelected === Category.Active ? "active" : ""
        }`}
        onClick={() => handleFilterClick(Category.Active)}
      >
        Active
      </button>
      <button
        className={`filterButton ${
          categorySelected === Category.Completed ? "active" : ""
        }`}
        onClick={() => handleFilterClick(Category.Completed)}
      >
        Completed
      </button>
    </div>
  );
};
