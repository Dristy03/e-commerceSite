import { atom } from 'recoil';
// typeof window !== 'undefined' ? localStorage.getItem('user') :
export const userState = atom({
  key: 'user',
  default:  null,
});
