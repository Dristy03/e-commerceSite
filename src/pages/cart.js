import styles from "@/styles/Cart.module.css";
import Navbar from "@/components/Navbar";
import {React,useState,useEffect} from "react";
import { useRecoilState, useRecoilValue } from 'recoil'
import { cartState, grandTotal } from '@/atoms/cartAtom'
import Link from "next/link";


const replaceItemAtIndex = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

export default function Cart() {
  let [count, setCount] = useState(0);
  const [cart, setCart] = useRecoilState(cartState)
  const grandTotalPrice = useRecoilValue(grandTotal)
  console.table(cart)
  // fetching of the prices needed to be done
  let [price, setPrice] = useState(3500);
  let [totalPrice, setTotalPrice] = useState(0);


  const incrementCount=(item)=> {
    const index = cart.findIndex((listItem) => listItem === item);
    const newList = replaceItemAtIndex(cart, index, {
      ...item,
      count: item.count+1
    });
    setCart(newList)
    
  }
  const decrementCount=(item)=> {
    if(item.count>1){
    const index = cart.findIndex((listItem) => listItem === item);
    const newList = replaceItemAtIndex(cart, index, {
      ...item,
      count: item.count-1
    });
    setCart(newList)
  }
    
  }

  return (
    <>
      <Navbar />

      <div className={styles.shoppingcart}>
        <div className={styles.title}>Your Cart</div>
        {cart && cart.map((item,index)=>(
            <div key={index}>
            <div className={styles.item}>
              <div className={styles.image}>
                <img
                  src={item.image}
                  alt=""
                  height={100}
                  width={100}
                />
              </div>
  
              <h1 className={styles.description}>{item.p_name}</h1>
  
              <div className={styles.quantity}>
                <button className={styles.plusbtn} type="button" name="button" onClick={()=>decrementCount(item)}>
                  -
                </button>
                <input type="text" name="name" value={item.count} />
                {/* <h3> {item.count} </h3> */}
                <button className={styles.minusbtn} type="button" name="button" onClick={()=>incrementCount(item)}>
                  +
                </button>
              </div>
  
              <div className={styles.totalprice}>Tk {item.count * item.price}</div>
  
              <span className={styles.deletebtn}> Remove </span>
            </div>
          </div>
        ))
        }
        
        <div className={styles.bottom}>
          <h3>Grand Total: <span>TK {grandTotalPrice} </span></h3>
          <Link href="/checkout" ><button className={styles.ck}>CHECKOUT</button></Link>
        </div>
      </div>
    </>
  );
}
