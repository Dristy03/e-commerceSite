import styles from '@/styles/Welcome.module.css'
import Navbar from '@/components/Navbar'
import { useEffect } from 'react'


export default function Welcome() {
  const [balance,setBalance] = useState(0)
  const addMoney= () =>{

  }

  useEffect(()=>{
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem('email'),
        password: passwordRef.current.value,
      }),
    };
    const fetchBalnce = async () => {
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
  },[balance])
  return (
    <>
 
   <Navbar/>
    <section>
        <div className={styles.home_page}>
            <div >
              <h2>THis is a dummy button which will add 1000 to your account</h2>
              <button onClick={addMoney}>Add money</button>

            </div>
        </div>
    </section>
    </>
  )
}
