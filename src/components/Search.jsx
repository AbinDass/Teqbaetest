import React from "react";
import { useQueryContext } from "../context/searchContext";

const Search = () => {
    const { query, setQuery } = useQueryContext();
    return (
        <div className="max-w-lg mx-auto mt-6 py-10">
            <input
                type="text"
                value={query}
                placeholder="Search users..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
};

export default Search;
