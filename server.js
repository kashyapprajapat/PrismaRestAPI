import express, { json } from "express";
import "dotenv/config";

const app = express()
const PORT = process.env.PORT || 7000
app.use(express.json())


app.get("/", (req,res) =>{
   return res.send("Prizma is awesome ...")
})

import Routes from "./routes/index.js"
app.use(Routes)


 
app.listen(PORT,()=>{
    console.log(`Server is Running at PORT at ${PORT}`)
})