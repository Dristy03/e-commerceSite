import styles from "@/styles/Notification.module.css";
import Navbar from "@/components/Navbar";

export default function Notification() {
  return (
    <>
      <Navbar />

      <h2 style={{paddingTop: "50px", paddingLeft: "100px"}}>Recent Notification</h2>
      <div className={styles.container}>
				<div className={styles.box}>
					<h3> Your request for purchase is proceeded!</h3>
				</div>
			</div>

		
    </>
  );
}
