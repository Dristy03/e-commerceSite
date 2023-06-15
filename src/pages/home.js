import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'
import ProductItem from '@/component/ProductItem'


export default  function Home() {
    const [products, setProducts ] = useState([])
    useEffect(()=>{
        const fetchProducts = async () => {
            try{
                const response = await fetch('http://localhost:3000/api/products')
                const data = await response.json()
                //console.log(data['products'])
                setProducts(data['products'])
            }catch(error){
                console.error('Error fetching products :', error); 
            }
        }
        fetchProducts();
    },[])

  return (
    <>
 
   <Navbar/>
   <section>
        <div className={styles.seller}>
            <h2 className={styles.sellerh2}>Top Sales</h2>
            <div className={styles.bestseller}>

                { products && products.map((item)=>(
                    <ProductItem key={item.p_id} props={item}/>
                ))}

                
                 
                
            </div>
        </div>
      
    </section>
    </>
  )
}
