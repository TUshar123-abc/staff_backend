import express  from "express";
import dotenv from "dotenv"
import db from "./config/db.js"
import  router  from "./routes/contactRoutes.js";
import cors from "cors"

const app = express();
const port = process.env.PORT || 4000;
dotenv.config();
db()
app.use(cors())
app.use(express.json());
app.use('/api', router)

app.listen(port, "0.0.0.0" , ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})