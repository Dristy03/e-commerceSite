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

export {
    cartProductNumber
}