import { query } from "@/lib/db"


export default async function handler(req, res) {
    const email = req.body.email
    const acc_no = req.body.acc_no
    const secret = req.body.secret
    await query({
        query: "insert into e_commerce.bank (email,account_no,secret,balance) VALUES(?,?,?,0);",
        values: [email,acc_no,secret]
        })
    const response = await query({
        query: "Select * from bank where email = ?",
        values: [email]
        })
    
    res.status(200).json(response[0])

}
