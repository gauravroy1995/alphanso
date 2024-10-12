import { Filters } from "./Filters";
import { SearchBar } from "./SearchBar";
import "./header.css";

export const Header = () => {
  return (
    <div className="headerMain">
      <div className="todayText">Today</div>
      <SearchBar />
      <Filters />
    </div>
  );
};
