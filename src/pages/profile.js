import styles from "@/styles/Profile.module.css";
import Navbar from "@/components/Navbar";

export default function Profile() {
  return (
    <>
      <Navbar />

      <h2 style={{paddingTop: "50px", paddingLeft: "100px"}}>Edit Profile</h2>

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
                  <label className={styles.slabel}>Transaction Id</label>
                </div>                   
                </div>
               
                <div className={styles}><button className={styles.profilebutton} type="button">Save Profile</button></div>
            </div>
    
      
    </>
  );
}
