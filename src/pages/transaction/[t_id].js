import styles from "@/styles/Transaction.module.css";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createNotification } from "@/components/Notification";
import { BsCheck, BsClock , BsX} from 'react-icons/bs';


export default function Transaction() {
    const router = useRouter();
    const { t_id } = router.query;
    const [transaction,setTransaction] = useState({})
    const [loading,setLoading] = useState(true)
    const [cart,setCart] = useState([])

    const addMoney= async (email,val) =>{
        const postData = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            amount: val
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

    const supplier_verify = async () =>{
        const postData = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              t_id: t_id,
            }),
          };
        try{
            const response = await fetch('http://localhost:3000/api/transaction/supplier_verify',postData)
            const tn = await response.json()
            createNotification(tn.supplier,tn.buyer,tn.t_id,"Your ordered products are on the way. Please confirm when recieved")
            setTransaction(tn)
        }catch(error){
            console.error('Error fetching products :', error); 
        }
        
    }
    const buyer_verify = async () =>{
        const postData = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              t_id: t_id,
            }),
          };
        try{
            const response = await fetch('http://localhost:3000/api/transaction/buyer_verify',postData)
            const tn = await response.json()

            addMoney(transaction.supplier,transaction.total)
            createNotification(tn.buyer,tn.supplier,tn.t_id,"Congratulations!Customer has recieved your order. Payment has been added to your bank")
            setTransaction(tn)
        }catch(error){
            console.error('Error fetching products :', error); 
        }
        
    }
    const cancel = async () =>{
        const postData = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              t_id: t_id,
            }),
          };
         
        try{
            const response = await fetch('http://localhost:3000/api/transaction/cancel',postData)
            const tn = await response.json()

            addMoney(transaction.buyer,transaction.total)
            createNotification(tn.supplier,tn.buyer,tn.t_id,"Sorry, the supplier has cancelled your order. Your money has been refunded")
            setTransaction(tn)
        }catch(error){
            console.error('Error fetching products :', error); 
        }
        
    }

    useEffect(()=>{
        
        const fetchTransaction = async () => {
        const query = 'http://localhost:3000/api/transaction/'+t_id;
        console.log(query)
        try{
            const response = await fetch('http://localhost:3000/api/transaction/'+t_id)
            const bal = await response.json()
            console.log(bal)
            
            setTransaction(bal.transaction)
            setCart(bal.products)
            setLoading(false)
            console.log(cart)
            
        }catch(error){
            console.error('Error fetching products :', error); 
        }
        }
        fetchTransaction();
    },[])

  return (
    <>
      <Navbar />
        {!loading && <>
      <h3 style={{ paddingTop: "50px", paddingLeft: "100px" }}>Buyer: {transaction.buyer}</h3>
      <h3 style={{ paddingLeft: "100px" }}>Supplier: {transaction.supplier}</h3>

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
            { cart && cart.map((item,index)=>(
                
                <tr key={index}>
                    <td>{index+1}</td>
                    <td><img
                    src={item.image}
                    alt=""
                    height={100}
                    width={100}
                    /></td>
                    <td>{item.p_name}</td>
                    <td>{item.count}</td>
                    <td>Tk {item.price * item.count}</td>
                </tr>
            ))}
            <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td>Tk {transaction.total}</td>
            </tr>


          </tbody>
        </table>

       
      </div>




      <div style={{ paddingTop: "50px", paddingLeft: "100px", paddingRight:80 }}>
        <h1>Status  <span className={styles.badge}>
         { transaction.completed === 1 && transaction.supplier_verified === 1 && transaction.buyer_verified === 1 && "Completed"}
           {transaction.completed ===1 && transaction.supplier_verified === 0 && "Cancelled"}
           {transaction.completed ===0 && "Pending"}
           </span>
           </h1>
    <hr></hr>
       {transaction.buyer === localStorage.getItem('email') ? <div className={styles.status}>
       <BsCheck color="green" size="30px"/> <h3 style={{'color':"green"}}> You have already paid for the products. Please wait for the supplier to send your products. </h3>
       </div> : <div className={styles.status}>
       <BsCheck color="green" size="30px"/> <h3 style={{'color':"green"}}> Buyer has already paid for the products. Please send the required package to user address and confirm it below </h3>
       </div>}
       

       {
       transaction.supplier === localStorage.getItem('email') && transaction.completed === 0 && 
       
       (transaction.supplier_verified === 0 ? <div style={{alignItems:"center", width:"100%",display: "flex", justifyContent: "space-around"}}><div className={styles.box}>
       <h3> Please confirm after you have sent the products to the user.  <button onClick={supplier_verify} style={{backgroundColor:'green', marginTop: 10, padding: 5, borderRadius: 5}}>Confirm</button>  <button onClick={cancel} style={{backgroundColor:'red', marginTop: 10, padding: 5, borderRadius: 5}}>Cancel</button></h3>
       </div> </div>: <div className={styles.status}>
       <BsClock color="orange" size="20px"/> <h3 style={{'color':"orange", marginLeft: 10}}> Please wait for the user to receive the product and confirm it.</h3>
       </div> 
       )}
       {
       transaction.buyer === localStorage.getItem('email') && transaction.supplier_verified === 1 && 
       (transaction.buyer_verified === 0 ?<div style={{alignItems:"center", width:"100%",display: "flex", justifyContent: "space-around"}}><div className={styles.box}>
        <h3> Please confirm if you have received the products.<br></br>  <button onClick={buyer_verify} style={{backgroundColor:'green', marginTop: 10, padding: 5, borderRadius: 5}}>Confirm</button><br/><p style={{color:"black", fontSize:"15px", fontWeight:200}}>If you have not received the products after a long time, contact an admin.</p></h3>
       </div> </div>: <div className={styles.status}>
       <BsCheck color="green" size="30px"/> <h3 style={{'color':"green"}}>You have successfully received the product</h3>
       </div> 
       )}
       
       {
        transaction.completed === 1 && transaction.supplier_verified === 1 && transaction.buyer_verified === 1 && 
        <div className={styles.status}>
       <BsCheck color="green" size="30px"/> <h3 style={{'color':"green"}}> The transaction was successful. </h3>
       </div>
       }
       {
        transaction.completed === 1 && transaction.supplier_verified === 0 && transaction.buyer_verified === 0 && 
        <div className={styles.status}>
        <BsX color="red" size="30px"/><h3 style={{'color':"red"}}> The transaction was cancelled. </h3>
       </div>
       }
      </div>
      </>}
    </>
  );
}
