import { createContext, useState } from "react";
import { useContext } from "react";

export const Context = createContext() 
const ContextProvider = ({children}) => { 
    const[productList, setProductList] = useState()
    const value = {productList, setProductList}
    return (<Context.Provider value={value}>
        {children}
    </Context.Provider>)
}
export default ContextProvider
