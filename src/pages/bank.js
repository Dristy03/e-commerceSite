import styles from "@/styles/Profile.module.css";
import Navbar from "@/components/Navbar";
import { useRecoilState } from "recoil";
import { userState } from "@/atoms/userAtom";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function Bank() {
  const router = useRouter()
  const [user,setUser] = useRecoilState(userState)
  const [balance,setBalance] = useState(0)
  const acc_no_ref = useRef()
  const secret_ref = useRef()
  const addAccountInfo= async (event) =>{
    event.preventDefault()
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem('email'),
        acc_no: acc_no_ref.current.value,
        secret: secret_ref.current.value
      }),
    }
    try{
      const response = await fetch('http://localhost:3000/api/bank/create',postData)
      const bal = await response.json()
      console.log(bal)
      router.push('/home')
  }catch(error){
      console.error('Error fetching products :', error); 
  }
  }
  
  return (
    <>
      <Navbar />

      <h2 style={{paddingTop: "50px", paddingLeft: "100px"}}>Profile and Bank Details</h2>

      <div className={styles.container}>
              
                <div className={styles.box}>
                  <div className={styles.userbox}>
                  <input className={styles.sinput} name="id" required=""  ref={acc_no_ref}/>
                  <label className={styles.slabel}>Account Number</label>
                </div>  

                <div className={styles.userbox}>
                  <input className={styles.sinput} name="id" type="password" required="" ref={secret_ref} />
                  <label className={styles.slabel}>Secret</label>
                </div>  
                           
                </div>
               
                <div className={styles}><button className={styles.profilebutton} type="button" onClick={addAccountInfo}>Save Account Information</button></div>
            </div>
    
      
    </>
  );
}
