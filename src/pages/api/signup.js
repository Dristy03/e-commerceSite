import { query } from "@/lib/db"

export default async function handler(req, res) {
  if (req.method === "POST"){
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password
    console.log(email, password)
    const user = await query({
      query: "INSERT INTO `e_commerce`.`user` (`email`, `username`, `password`, `type`) VALUES (?,?,?,?);",
      values: [email, username, password, "buyer"]
    })
    console.log(user)
    if(user.affectedRows)
        res.status(200).json({ 'msg': 'success'})
    else 
        res.status(201).json({'msg':"Something went wrong", error: user['error']})
  }
}