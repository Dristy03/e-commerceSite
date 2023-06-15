import { query } from "@/lib/db"

export default async function handler(req, res) {
    
    const products = await query({
        query: "Select * from product",
        values: []
        })
    res.status(200).json({products: products})  

}
