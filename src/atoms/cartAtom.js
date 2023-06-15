const { atom,selector } = require("recoil");


export const cartState = atom({
    key: 'cart',
    default : []
})

const cartProductNumber = selector({
    key: 'cartProductNumber',
    get: ({get}) => {
    const cart = get(cartState);  
    return cart.length;
    },
  });



const grandTotal = selector({
    key: 'grandTotal',
    get: ({get}) => {
    const cart = get(cartState);  
    let total = 0
    cart.map((item)=>{
        total = total+ item.price * item.count
    })
    return total
    },
  });

export {
    cartProductNumber, grandTotal
}