import styles from "@/styles/Profile.module.css";
import Navbar from "@/components/Navbar";
import { useRecoilState } from "recoil";
import { userState } from "@/atoms/userAtom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Profile() {
  const [user,setUser] = useRecoilState(userState)
  const [account,setAccount] = useState({})
  
  const addMoney= async (amount) =>{
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem('email'),
        amount: amount
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

      <h2 style={{paddingTop: "50px", paddingLeft: "100px"}}>Bank Details</h2>

      <div className={styles.container}>
              
                <div className={styles.box}>
                <div className={styles.userbox}>
                  <p className={styles.sinput}>{user.username}</p>
                  <label className={styles.slabel}>Name</label>
                </div>    
                <div className={styles.userbox}>
                  <p className={styles.sinput}>{user.email}</p>
                  <label className={styles.slabel}>Email Address</label>
                </div>    

                  <div className={styles.userbox}>
                  <p className={styles.sinput}>{account.account_no}</p>
                  <label className={styles.slabel}>Account Number</label>
                </div>  

                <div className={styles.userbox}>
                  <p className={styles.sinput}>{account.secret}</p>
                  <label className={styles.slabel}>Secret</label>
                </div>  
                 <div className={styles.userbox}>
                 <p className={styles.sinput}>{account.balance}</p>
                 <label className={styles.slabel}>Current Amount</label>
                </div>  

               

              Do you want to add money in your account? 

              <button style={{marginLeft: "10px", background:"#f05e8a", color:"#fff", padding: 8, borderRadius: 5}} onClick={()=>Swal.fire({
  title: 'Recharge your account ',
  input: 'number',
  showCancelButton: true,
  confirmButtonText: 'Confirm',
  confirmButtonColor: '#f05e8a',
  showLoaderOnConfirm: true,
  preConfirm: (amount)=> addMoney(amount),
  allowOutsideClick: () => !Swal.isLoading()
})}>Add Now</button>             
                </div>
               
            </div>
    
      
    </>
  );
}
