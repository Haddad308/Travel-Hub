/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export let tokenContext = createContext(); 

export default function TokenContextProvider({children}){
    let token = useState(null); 
    return(
        <tokenContext.Provider value={token}>
            {children}
        </tokenContext.Provider>
    )
}