import { createContext, useEffect, useState } from "react";
import { products } from '../assets/frontend_assets/assets';
import { toast } from "react-toastify";

export const ShopContext = createContext();


const ShopContextProvider = (props) =>{

    const currency = '€';
    const delivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    {/*pour ajouter au panier */}
    const [cartItems,setCartItems] = useState({});

    const addToCart = async (itemId,size) =>{

        if(!size){
            toast.error('Veuiller choisir la taille svp !')
            return;
        }
        {/*pour creer une copie des produits */}
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }

    useEffect ((cartData) => {

    },[cartItems])

    const value = {
        products, currency, delivery_fee, 
        search, setSearch, showSearch, setShowSearch, cartItems, addToCart

    }

    return (
        <ShopContext.Provider value= {value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;