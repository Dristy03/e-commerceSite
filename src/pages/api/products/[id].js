import { query } from "@/lib/db"

export default async function handler(req, res) {
    const {
        query: { id },
      } = req;
    // asking for specific product
    console.log("all products called")
    if(id){

    }else{// error
        
    }

}
