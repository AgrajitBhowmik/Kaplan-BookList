import React from "react";

function SearchBox({ value, handleChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        value={value}
        className="mb-3 ml-3 search"
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
