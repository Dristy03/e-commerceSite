import styles from "@/styles/Profile.module.css";
import Navbar from "@/components/Navbar";
import { useRecoilState } from "recoil";
import { userState } from "@/atoms/userAtom";

export default function Profile() {
  const [user,setUser] = useRecoilState(userState)

  return (
    <>
      <Navbar />

      <h2 style={{paddingTop: "50px", paddingLeft: "100px"}}>Profile and Bank Details</h2>

      <div className={styles.container}>
              
                <div className={styles.box}>
                <div className={styles.userbox}>
                  <input className={styles.sinput} name="name" required="" />
                  <label className={styles.slabel}>Name</label>
                </div>    
                <div className={styles.userbox}>
                  <input className={styles.sinput} name="email" required="" />
                  <label className={styles.slabel}>Email Address</label>
                </div>    

                  <div className={styles.userbox}>
                  <input className={styles.sinput} name="id" required="" />
                  <label className={styles.slabel}>Account Number</label>
                </div>  

                <div className={styles.userbox}>
                  <input className={styles.sinput} name="id" type="password" required="" />
                  <label className={styles.slabel}>Secret</label>
                </div>  
                <div className={styles.userbox}>
                  <input className={styles.sinput} name="id" value={5000} />
                  <label className={styles.slabel}>Current Amount</label>
                </div>  

               

              Do you want to add money in your account? 

              <button style={{marginLeft: "10px"}}>Add Now</button>             
                </div>
               
                <div className={styles}><button className={styles.profilebutton} type="button">Save Profile</button></div>
            </div>
    
      
    </>
  );
}
