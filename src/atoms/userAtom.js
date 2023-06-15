import { atom } from 'recoil';
// typeof window !== 'undefined' ? localStorage.getItem('email') :
export const userState = atom({
  key: 'user',
  default:  null,
});
