import { query } from "@/lib/db"


export default async function handler(req, res) {
    const {
        query: { n_id },
      } = req;
    await query({
        query: "UPDATE `e_commerce`.`notification`  SET `seen` = 1   WHERE `n_id` = ?;",
        values: [n_id]
        })
    
    res.status(200).json(n_id)

}