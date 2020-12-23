export const insitalState={
  
    cart:[],
}

export const countReducer=(state,action)=>{
    switch(action.type){
        case "addCart":return {...state,cart:[...state.cart,action.payload]};
        case "removeCart":
            const index=state.cart.findIndex(e=>e.id===action.payload);
            let newCart=[...state.cart];
                newCart.splice(index,1);
            return {...state,cart:newCart}
        ;
        default:return state;
    }
}