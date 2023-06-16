import styles from "@/styles/Transaction.module.css";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

export default function Transaction() {
    const router = useRouter();
    const { t_id } = router.query;
    const [transaction,setTransaction] = useState({})

  return (
    <>
      <Navbar />

      <h3 style={{ paddingTop: "50px", paddingLeft: "100px" }}>Buyer:</h3>
      <h3 style={{ paddingLeft: "100px" }}>Supplier:</h3>

      <div className={styles.container}>
        <h3>Items To be Purchased</h3>
        <table className={styles.tables} style={{ marginTop: 50 }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><img
              src="https://i.postimg.cc/76X9ZV8m/Screenshot_from_2022-06-03_18-45-12.png"
              alt=""
              height={100}
              width={100}
            /></td>
              <td>Hoodie Jacket</td>
              <td>1</td>
              <td>Tk 3500</td>
            </tr>

            
          
          </tbody>
        </table>

       
      </div>

      <div style={{ paddingTop: "50px", paddingLeft: "100px" }}>
        <h1>Status  <span className={styles.badge}> Pending</span></h1>
<hr></hr>
       <div>
        <h3> Please confirm after you have sent the products to the user.  <span style={{color:'green', marginLeft: 10}}>Confirm</span>  <span style={{color:'red', marginLeft: 10}}>Cancel</span></h3>
       </div>

       <div>
        <h3> Please confirm if you have received the products.  <span style={{color:'green', marginLeft: 10}}>Confirm</span>  <span style={{color:'red', marginLeft: 10}}>Cancel</span></h3>
       </div>
      </div>
    </>
  );
}
