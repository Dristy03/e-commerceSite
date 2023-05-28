import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import { useEffect } from 'react'


export default  function Home() {

  return (
    <>
 
   <Navbar/>
   <section>
        <div className={styles.seller}>
            <h2 className={styles.sellerh2}>Top Sales</h2>
            <div className={styles.bestseller}>
                <div className={styles.bestp1}>
                    <img className={styles.bestp1img} src="https://i.postimg.cc/8CmBZH5N/shoes.webp" alt="img"/>
                        <div className={styles.name}>
                            <p>Navy-Brown Shoes</p>
                        </div>
                      
                        <div className={styles.price}>
                            Tk 3000
                        </div>                    
                     <button className={styles.addcart}> Add To Cart</button>
                      
                 
                </div>
                <div className={styles.bestp1}>
                <img className={styles.bestp1img} src="https://i.postimg.cc/76X9ZV8m/Screenshot_from_2022-06-03_18-45-12.png" alt="img"/>
                <div className={styles.name}>
                            <p>Hoodie Jacket</p>
                        </div>
                      
                        <div className={styles.price}>
                            Tk 3500
                        </div>                    
                     <button className={styles.addcart}> Add To Cart</button>
                </div>
                <div className={styles.bestp1}>
                <img className={styles.bestp1img} src="https://i.postimg.cc/j2FhzSjf/bs2.png" alt="img"/>
                <div className={styles.name}>
                            <p>Khaki Shirt</p>
                        </div>
                      
                        <div className={styles.price}>
                            Tk 2000
                        </div>                    
                     <button className={styles.addcart}> Add To Cart</button>
                
                </div>
                <div className={styles.bestp1}>
                <img className={styles.bestp1img} src="https://i.postimg.cc/fbnB2yfj/na1.png" alt="img"/>
                <div className={styles.name}>
                            <p>Heather Tshirt</p>
                        </div>
                      
                        <div className={styles.price}>
                            Tk 800
                        </div>                    
                     <button className={styles.addcart}> Add To Cart</button>
                
                </div>
              
            </div>
        </div>
      
    </section>
    </>
  )
}
