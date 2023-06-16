import styles from '@/styles/Welcome.module.css'
import Navbar from '@/components/Navbar'


export default function Welcome() {
    
  return (
    <>
 
   <Navbar/>
    <section>
        <div className={styles.home_page}>
            <div className={styles.home_img}>
                <img src="https://i.postimg.cc/t403yfn9/home2.jpg" alt="img "/>
            </div>
            <div className={styles.home_txt}>
                <h2 className={styles.home_txth2}>FALL - WINTER<br/>Collection 2023</h2>
                <div >
                    <p className={styles.home_label}>A specialist label creating luxury essentials. Ethically crafted<br/>with an unwavering commitment to exceptional quality.</p>
                </div>
                <button className={styles.hbutton}>Shop Now</button>
             
            </div>
        </div>
    </section>
    </>
  )
}
