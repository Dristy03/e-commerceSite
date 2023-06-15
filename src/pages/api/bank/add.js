
import { query } from "@/lib/db"


export default async function handler(req, res) {
    const email = req.body.email
    const amount = req.body.amount
    await query({
        query: "UPDATE e_commerce.bank SET balance = balance + ?  WHERE email = ?;",
        values: [amount,email]
        })
    const response = await query({
        query: "Select * from bank where email = ?",
        values: [email]
        })
    
    res.status(200).json(response[0].balance)

}
