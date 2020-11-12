
export const addItemToCart=(cartItems,cartItemToAdd)=>{
    const existingItem = cartItems.find(cartItem=>cartItem.id===cartItemToAdd.id);

    if(existingItem){     
        return cartItems.map(cartItem=>{
            return cartItem.id===cartItemToAdd.id?{
              ...cartItem,quantity:cartItem.quantity +1 
            }:cartItem
        })
    }
    return [...cartItems,{...cartItemToAdd,quantity:1}]
}

export const removeItemFromCart=(cartItems,cartItemIDToRemove)=>{
    const existingItem= cartItems.find(cartItem=>cartItem.id===cartItemIDToRemove);
    if(existingItem.quantity>=2){
        return cartItems.map(cartItem=>{
            return cartItem.id===cartItemIDToRemove?{
              ...cartItem,quantity:cartItem.quantity -1 
            }:cartItem
        })
    }else{
        return cartItems.filter(cartItem=>cartItem.id!==cartItemIDToRemove)
    }
}