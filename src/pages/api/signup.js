import { query } from "@/lib/db"

export default async function handler(req, res) {
  if (req.method === "POST"){
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password
    console.log(email, password)
    const created = await query({
      query: "INSERT INTO `e_commerce`.`user` (`email`, `username`, `password`, `type`) VALUES (?,?,?,?);",
      values: [email, username, password, "buyer"]
    })
    console.log(created)
    if(created.affectedRows)
      {
        const user = await query({
          query: "Select * from user where email = ?",
          values: [email]
        })
        await query({
          query: "insert into e_commerce.bank (email,balance) VALUES(?,1000);",
          values: [email]
        })
        res.status(200).json({ 'msg': 'success',user: user[0]})
      }
        
    else 
        res.status(201).json({'msg':"Something went wrong", error: user['error']})
  }
}