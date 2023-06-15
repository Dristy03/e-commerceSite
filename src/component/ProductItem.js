import React from 'react'
import styles from '@/styles/Home.module.css'

const ProductItem = ({props}) => {
  return (
    <div className={styles.bestp1}>
    <img className={styles.bestp1img} src={props.image} alt="img"/>
    <div className={styles.name}>
                <p>{props.p_name}</p>
            </div>
          
            <div className={styles.price}>
                Tk {props.price}
            </div>                    
         <button className={styles.addcart}> Add To Cart</button>
    
    </div>
  )
}

export default ProductItem