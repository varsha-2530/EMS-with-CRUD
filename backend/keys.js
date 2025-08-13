import dotenv from "dotenv";
dotenv.config(); 

export const DATABASE_URI = process.env.DATABASE_URI
export const PORT = process.env.PORT || 2530

