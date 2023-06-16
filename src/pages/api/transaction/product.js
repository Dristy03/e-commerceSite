import { query } from "@/lib/db"


export default async function handler(req, res) {
    const t_id = req.body.t_id
    const p_id = req.body.p_id
    const count = req.body.count
    const response  = await query({
        query: "INSERT INTO `e_commerce`.`transaction_product` (`t_id`, `p_id`, `count`) VALUES (?, ?, ?);",
        values: [t_id,p_id,count]
        })
    
    console.log(response)
    res.status(200).json(response.insertId)

}