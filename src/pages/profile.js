import styles from "@/styles/Profile.module.css";
import Navbar from "@/components/Navbar";
import { useRecoilState } from "recoil";
import { userState } from "@/atoms/userAtom";
import { useEffect, useState } from "react";

export default function Profile() {
  const [user,setUser] = useRecoilState(userState)
  const [account,setAccount] = useState({})
  
  const addMoney= async () =>{
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem('email'),
        amount: 1000
      }),
    }
    try{
      const response = await fetch('http://localhost:3000/api/bank/add',postData)
      const acc = await response.json()
      setAccount(acc)
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
    const fetchAccount = async () => {
      try{
          const response = await fetch('http://localhost:3000/api/bank',postData)
          const acc = await response.json()
          console.log(acc)
          console.log("useeffect")
          setAccount(acc)
      }catch(error){
          console.error('Error fetching products :', error); 
      }
  }
  fetchAccount();
  },[])

  return (
    <>
      <Navbar />

      <h2 style={{paddingTop: "50px", paddingLeft: "100px"}}>Profile and Bank Details</h2>

      <div className={styles.container}>
              
                <div className={styles.box}>
                <div className={styles.userbox}>
                  <h3>{user.username}</h3>
                  <label className={styles.slabel}>Name</label>
                </div>    
                <div className={styles.userbox}>
                  <h3>{user.email}</h3>
                  <label className={styles.slabel}>Email Address</label>
                </div>    

                  <div className={styles.userbox}>
                  <h3>{account.account_no}</h3>
                  <label className={styles.slabel}>Account Number</label>
                </div>  

                <div className={styles.userbox}>
                  <h3>{account.secret}</h3>
                  <label className={styles.slabel}>Secret</label>
                </div>  
                 <div className={styles.userbox}>
                 <h3>{account.balance}</h3>
                 <label className={styles.slabel}>Current Amount</label>
                </div>  

               

              Do you want to add money in your account? 

              <button style={{marginLeft: "10px"}} onClick={()=>addMoney()}>Add Now</button>             
                </div>
               
                <div className={styles}><button  className={styles.profilebutton} type="button">Save Profile</button></div>
            </div>
    
      
    </>
  );
}
