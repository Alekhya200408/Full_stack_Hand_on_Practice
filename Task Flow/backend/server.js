import express from 'express'
import DBconn from './src/DB/Db.js';
import dotenv from 'dotenv'
import Taskroute from './src/Routes/Task.Route.js';


const app=express()

// middleware
app.use(express.json())
app.use(express.urlencoded())
app.use('/api/auth',Taskroute)


dotenv.config()
DBconn()
app.listen(3000,()=>{
    console.log("Server is Running");
    
})



