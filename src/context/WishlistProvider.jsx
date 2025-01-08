import { createContext, useState, useEffect } from "react"

export const WishlistContext = createContext([]);

const WishlistProvider = ({children}) => {
    const [listWishlist, setListWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem("wishlist");
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(listWishlist));
    }, [listWishlist]);

    const addToWishlist = (movie) => {
        setListWishlist([...listWishlist, movie]);
    }

    const removeFromWishlist = (idMovie) => {
        const newWishlist = listWishlist.filter(movie => movie.id != idMovie);
        setListWishlist(newWishlist);
    }

    return (
        <WishlistContext.Provider value={{ listWishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}

export default WishlistProvider