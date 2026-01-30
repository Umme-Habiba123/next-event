import { MongoClient,Db } from "mongodb";
import clientPromise from "./mongodb";

export async function mongoClient (): Promise<{client:MongoClient,db:Db}>{
 const client = await clientPromise
 const db=client.db('nextEvent')
 return { client,db }
}