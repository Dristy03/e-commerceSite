import React from 'react'
import styles from '@/styles/Home.module.css'
import { useRecoilState } from 'recoil'
import { cartState } from '@/atoms/cartAtom'

const replaceItemAtIndex = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const ProductItem = ({props}) => {
  const [cart, setCart] = useRecoilState(cartState)
  const handleItemClick = () =>{
      // e.preventDefault();
      setCart((oldCart) => {
        const existingObjectIndex = oldCart.findIndex((item) => item.p_id === props.p_id);
        
        if (existingObjectIndex !== -1) {
          const oldObject = oldCart[existingObjectIndex]
          const updatedCart = replaceItemAtIndex(oldCart, existingObjectIndex, {
            ...props,
            count: oldObject.count + 1
          });
          // let updatedCart = [...oldCart];
          // updatedCart[existingObjectIndex].count += 1;
          return updatedCart;
        } else {
          return [
            ...oldCart,
            {
              ...props,
              count: 1
            }
          ];
        }
      });
      
  }
  return (
    <div className={styles.bestp1}>
    <img className={styles.bestp1img} src={props.image} alt="img"/>
    <div className={styles.name}>
                <p>{props.p_name}</p>
            </div>
          
            <div className={styles.price}>
                Tk {props.price}
            </div>                    
         <button className={styles.addcart} onClick={() => handleItemClick()}> Add To Cart</button>
    
    </div>
  )
}

export default ProductItem