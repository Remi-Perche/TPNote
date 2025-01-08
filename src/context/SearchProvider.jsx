import { createContext, useState } from "react"

export const SearchContext = createContext([]);

const SearchProvider = ({children}) => {
    const [search, setSearch] = useState("");

    const newSearch = (text) => {
        setSearch(text);
    }

    return (
        <SearchContext.Provider value={{ search, newSearch }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider