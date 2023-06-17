import { query } from "@/lib/db"


export default async function handler(req, res) {
    
    const reciever = req.body.reciever
    const response  = await query({
        query: "SELECT * FROM e_commerce.notification where reciever = ? ORDER BY n_id DESC; ",
        values: [reciever]
        })
    const n_id = response.insertId
    res.status(200).json(response)

}