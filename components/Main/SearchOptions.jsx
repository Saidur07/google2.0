import React from "react";

const SearchOptions = () => {
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Search Googly"
        className="p-6 m-3 shadow-lg shadow-gray-300 w-96 rounded-2xl"
      />
    </div>
  );
};

export default SearchOptions;
