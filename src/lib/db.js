import mysql from "mysql2/promise"

export async function query({ query, values = [] }) {
    
    const dbconnection = await mysql.createConnection({
      host: "localhost",
      database: 'e_commerce',
      user: 'root',
      password: 'ananna11',
      // password: 'drishub',
    });
  
    try {
      const [results] = await dbconnection.execute(query, values);
      dbconnection.end();
      return results;
    } catch (error) {
      // throw Error(error.message);
      return { error };
    }
  }
  