import { createContext, useReducer, useState } from "react"

import { FilterRedcuer } from "../reducers/FilterReducer";

export const FilterContext = createContext();

export function FilterProvider({ children }) {

    const [viewasidemobile, setViewAsidemobile] = useState(false);

    const [filterState, dispatchFilter] = useReducer(FilterRedcuer, {
        maxPriceRange: 4000, category: {
            MEN: false, WOMEN: false, KIDS: false
        }, selectedSizes: [], minRating: 0, sortBy: "", searchedTerm: ""
    })

    // console.log(filterState);

    return (
        <>
            <FilterContext.Provider value={{dispatchFilter, filterState, viewasidemobile, setViewAsidemobile}}>{children}</FilterContext.Provider>
        </>
    )
}