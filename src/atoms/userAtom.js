const { atom } = require("recoil");


export const userState = atom({
    key: 'user',
    default : null
})