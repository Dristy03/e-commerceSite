import styles from "@/styles/Cart.module.css";
import Navbar from "@/components/Navbar";

export default function Cart() {
  return (
    <>
      <Navbar />

      <div className={styles.shoppingcart}>
        <div className={styles.title}>Shopping Bag</div>

        <div className={styles.item}>
          <div className={styles.buttons}>
            <span className={styles.deletebtn}></span>
            <span className={styles.likebtn}></span>
          </div>

          <div className={styles.image}>
            <img src="https://i.postimg.cc/76X9ZV8m/Screenshot_from_2022-06-03_18-45-12.png" alt="" height={200} width={200}/>
          </div>

          <div className={styles.description}>
            <span>Hoodie Jacket</span>
        
          </div>

          <div className={styles.quantity}>
            <button className={styles.plusbtn} type="button" name="button">
              <img src="plus.svg" alt="" />
            </button>
            <input type="text" name="name" value="1" />
            <button className={styles.minusbtn} type="button" name="button">
              <img src="minus.svg" alt="" />
            </button>
          </div>

          <div className={styles.totalprice}>$549</div>
        </div>
      </div>
    </>
  );
}
