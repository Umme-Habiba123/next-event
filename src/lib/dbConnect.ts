import { MongoClient } from "mongodb";

if(!process.env.MONGODB_URI){
      throw new Error("No mongoDB uri found")
}

const uri = process.env.MONGODB_URI

async function dbConnect(){
      const client = new MongoClient(uri)   //database connect korbe--- 
    await client.connect()   //client database er access dibe------
    const db=client.db("next_event")  //databse pele return---
    return {client,db} ;
}