import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({children}){
    const ls = typeof window !== "undefined" ? window.localStorage : null;
    const [cartItems, setCartItems] = useState([]);

    //this useEffect is needed for saving the cart items to localstorage
    useEffect(() => {
        if (cartItems?.length > 0){
            ls?.setItem('cart', JSON.stringify(cartItems));
        }
    }, [cartItems, ls]);

    //this useEffect is needed for having the same num of products on cart for server and client
    useEffect(() => {
        if (ls && ls.getItem('cart')) {
            setCartItems(JSON.parse(ls?.getItem('cart')));
        }
    },[ls])

    //function to add a product to the cart context
    function addProduct(productID){
        setCartItems(prev => [...prev,productID]);
    }
    function removeProduct(productID){
        setCartItems(prev => {
            const pos = prev.indexOf(productID);
            if (pos !== -1){
                return prev.filter((value,index) => index !== pos);
            }
            return prev;
        })
    }
    return(
        <CartContext.Provider value={{cartItems, setCartItems,addProduct,removeProduct}}>
        {children}
        </CartContext.Provider>
    );
}