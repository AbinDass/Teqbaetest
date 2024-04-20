import React, { createContext, useContext } from "react";

// Create the context
const QueryContext = createContext();

// Custom hook to use the query context
export const useQueryContext = () => useContext(QueryContext);

// QueryProvider component to wrap your application with
export const QueryProvider = ({ children }) => {
    const [query, setQuery] = React.useState("");
    const [itemId, setItemId] = React.useState();

    return <QueryContext.Provider value={{ query, setQuery, itemId, setItemId }}>{children}</QueryContext.Provider>;
};
