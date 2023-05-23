import styles from "@/styles/Cart.module.css";
import Navbar from "@/components/Navbar";

export default function Cart() {
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
            <button className={styles.plusbtn} type="button" name="button">
              -
            </button>
            <input type="text" name="name" value="1" />
            <button className={styles.minusbtn} type="button" name="button">
              +
            </button>
          </div>

          <div className={styles.totalprice}>Tk 3500</div>

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
