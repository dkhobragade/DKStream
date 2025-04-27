import express from 'express'
import authRoute from '../backend/routes/auth.routes.js'

const app = express()


app.use('/api/auth',authRoute)

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})