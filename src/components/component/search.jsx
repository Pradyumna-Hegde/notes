import "../styles/shared.css";
import "../styles/search.css";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="4rem" />
      <input
        type="text"
        placeholder="Search Notes"
        onChange={(event) => handleSearchNote(event.target.value)}
      />
    </div>
  );
};

export default Search;
