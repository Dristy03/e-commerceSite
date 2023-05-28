import { query } from "@/lib/db"

export default async function handler(req, res) {
  if (req.method === "POST"){
    const email = req.body.email
    const password = req.body.password
    console.log(email, password)
    const user = await query({
      query: "Select * from user where email = ? and password = ?",
      values: [email, password]
    })
    if(user.length > 0)
        res.status(200).json({ user: user[0] })
    else 
        res.status(201).json({'msg':"Invalid email or password"})
  }
}