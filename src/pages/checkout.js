import styles from '@/styles/Checkout.module.css'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { cartState, grandTotal } from '@/atoms/cartAtom'
import { useRouter } from 'next/router';



export default function Checkout() {
  const router = useRouter();
  const grandTotalPrice = useRecoilValue(grandTotal)
  const [account,setAccount] = useState({})
  const [cart,setCart] = useRecoilState(cartState)
  
  


  const addMoney= async (val) =>{
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem('email'),
        amount: val
      }),
    }
    try{
      const response = await fetch('http://localhost:3000/api/bank/add',postData)
      const bal = await response.json()
      setAccount(bal)
  }catch(error){
      console.error('Error fetching products :', error); 
  }
  }
  const makePayment = async () =>{
    
    if(grandTotalPrice >= account.balance){
      console.log("Not enough money")
      return 
    }
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        buyer: localStorage.getItem('email'),
        total: grandTotalPrice
      }),
    }

    try{
      const response = await fetch('http://localhost:3000/api/transaction',postData)
      const t_id = await response.json()
      console.log("tid",t_id)
      cart.map(async (item)=>{
        const productData = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            t_id: t_id,
            p_id: item.p_id,
            count: item.count
          }),
        }
        // upload each product with count to t_id
        await fetch('http://localhost:3000/api/transaction/product',productData)
          
      })

      // subtract the total from buyer account
      addMoney(-grandTotalPrice)
      router.push('/transaction/' + t_id);
  }catch(error){
      console.error('Error fetching products :', error); 
  }


  

    
  }

  useEffect(()=>{
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem('email'),
      }),
    };
    const fetchBalance = async () => {
      try{
          const response = await fetch('http://localhost:3000/api/bank',postData)
          const bal = await response.json()
          
          setAccount(bal)
      }catch(error){
          console.error('Error fetching products :', error); 
      }
  }
  fetchBalance();
  },[])


  return (
    <>
 
   <Navbar/>

   <div className={styles.container}>

    <div className={styles.box}>

    <div>
              <h2>You current balance : {account.balance}</h2>
              <br/>
              <h2>You total cost : {grandTotalPrice}</h2>
            </div>
            <button className={styles.btn} onClick={makePayment}>Pay Now</button>

    </div>
              
            
          </div>
    {/* <section>


        <div className={styles.home_page}>
            <div >
              <h2>THis is a dummy button which will add 1000 to your account</h2>
              <button onClick={addMoney}>Add money</button>
            </div>
            <br/>
            <div>
              <h2>You current balance : {balance}</h2>
              <br/>
              <h2>You total cost : {grandTotalPrice}</h2>
            </div>
            <button onClick={makePayment}>Pay Now</button>
        </div>
    </section> */}
    </>
  )
}
