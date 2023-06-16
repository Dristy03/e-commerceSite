import { query } from "@/lib/db"


export default async function handler(req, res) {
    const {
        query: { t_id },
      } = req;
    
    const response  = await query({
        query: "SELECT * FROM e_commerce.transaction where t_id = ?;",
        values: [t_id]
        })
    const transaction = response[0]
    const products  = await query({
        query: "SELECT * FROM product JOIN transaction_product ON product.p_id = transaction_product.p_id WHERE transaction_product.t_id = ?;",
        values: [t_id]
        })

    res.status(200).json({transaction: transaction, products: products[0]})

}