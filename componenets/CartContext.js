import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({children}){
    const [cartItems, setCartItems] = useState([]);
    function addProduct(productID){
        setCartItems(prev => [...prev,productID]);
    }
    return(
        <CartContext.Provider value={{cartItems, setCartItems,addProduct}}>
        {children}
        </CartContext.Provider>
    );
}