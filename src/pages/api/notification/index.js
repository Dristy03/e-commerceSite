import { query } from "@/lib/db"


export default async function handler(req, res) {
    const sender = req.body.sender
    const reciever = req.body.reciever
    const t_id = req.body.t_id
    const message = req.body.message
    const response  = await query({
        query: "INSERT INTO `e_commerce`.`notification` (`sender`, `reciever`, `t_id`, `message`) VALUES (?,?,?,?);",
        values: [sender,reciever,t_id,message]
        })
    const n_id = response.insertId
    res.status(200).json(response.insertId)

}