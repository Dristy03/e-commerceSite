import { query } from "@/lib/db"


export default async function handler(req, res) {
    const buyer = req.body.buyer
    const seller = "s@gmail.com"
    const total = req.body.total
    const response  = await query({
        query: "INSERT INTO `e_commerce`.`transaction` (`buyer`, `total`, `supplier`) VALUES (?, ?, ?);",
        values: [buyer,total,seller]
        })
    
    console.log(response)
    res.status(200).json(response.insertId)

}