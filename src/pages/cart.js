import styles from "@/styles/Cart.module.css";
import Navbar from "@/components/Navbar";
import {React,useState,useEffect} from "react";

export default function Cart() {
  let [count, setCount] = useState(0);
  // fetching of the prices needed to be done
  let [price, setPrice] = useState(3500);
  let [totalPrice, setTotalPrice] = useState(0);


  function incrementCount() {
    count = count + 1;
    setCount(count);
    setPrice (count * 3500)
    
  }
  function decrementCount() {
    if(count>1)
    {
      count = count - 1;
      setCount(count);
      setPrice (count * 3500)

    }
   
  }

  return (
    <>
      <Navbar />

      <div className={styles.shoppingcart}>
        <div className={styles.title}>Shopping Bag</div>

        <div className={styles.item}>
          <div className={styles.image}>
            <img
              src="https://i.postimg.cc/76X9ZV8m/Screenshot_from_2022-06-03_18-45-12.png"
              alt=""
              height={100}
              width={100}
            />
          </div>

          <h1 className={styles.description}>Hoodie Jacket</h1>

          <div className={styles.quantity}>
            <button className={styles.plusbtn} type="button" name="button" onClick={decrementCount}>
              -
            </button>
            <input type="text" name="name" value={count} />
            <button className={styles.minusbtn} type="button" name="button" onClick={incrementCount}>
              +
            </button>
          </div>

          <div className={styles.totalprice}>Tk {price}</div>

          <span className={styles.deletebtn}> Remove </span>
        </div>

        <div className={styles.bottom}>
          <h3>Grand Total: <span>TK 3500 </span></h3>
          <button className={styles.ck}>CHECKOUT</button>
        </div>
      </div>
    </>
  );
}
