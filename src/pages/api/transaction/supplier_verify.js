import { query } from "@/lib/db"


export default async function handler(req, res) {
    const t_id = req.body.t_id
    
    await query({
        query: "UPDATE `e_commerce`.`transaction`  SET `supplier_verified` = 1   WHERE `t_id` = ?;",
        values: [t_id]
        })
    const response  = await query({
        query: "SELECT * FROM e_commerce.transaction where t_id = ?;",
        values: [t_id]
        })
    const transaction = response[0]
    console.log(transaction)
    res.status(200).json(transaction)

}