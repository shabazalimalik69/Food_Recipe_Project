require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;
const app = express();
const cors = require('cors');
const connectDB = require('./Config/db')
const userRouter = require('./Routers/routes');

app.use(cors());
app.use(express.json());
app.use('/',userRouter);

app.get("/",(req,res)=>{
    res.send('Homepage')
});

app.listen(PORT,async()=>{
    await connectDB();
    console.log(`Running on http://localhost:${PORT}`)
})