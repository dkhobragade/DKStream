import express from 'express'
import authRoute from '../backend/routes/auth.routes.js'
import { ENV_VAR } from './config/envVar.js'
import { connectDB } from './config/db.js'

const app = express()

const port = ENV_VAR.PORT

app.use(express.json())
app.use('/api/auth',authRoute)


app.listen(port,()=>{
    console.log(`server is running on port ${port}` )
    connectDB()
})