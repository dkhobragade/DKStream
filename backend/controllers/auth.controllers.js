import { User } from "../models/user.model.js"

export async function singUp(req,res) {
    try{
        const {email,password,username}=req.body

        if(!email || !password || !username){
            return res.status(400).json({success:false,message:'All field are required'})
        }

        if(password.length<6){
            return res.status(400).json({success:false,message:'Password must be alteast 6 characters'})
        }

        const existingUserEmail= await User.findOne({email:email})

        if(existingUserEmail){
            return  res.status(400).json({success:false,message:'Email already exists'})
        }

        const existingUserName = await User.findOne({username:username})

        if(existingUserName){
            return  res.status(400).json({success:false,message:'Username already exists'})
        }

        const profilePic = ['/avatar1.png','/avatar2.png','/avatar3.png']

        const image = profilePic[Math.floor(Math.random()*profilePic.length)]

        const newUser = new User({
            email,
            username,
            password,
            image
        })

        newUser.save()

        res.status(201).json({
            success:true,
            user:{
                ...newUser._doc,
                password:''
            }
        })


    }catch(err){

        console.log("Error in signUp",err.message)
        res.status(500).json({
            message:'Internal Server Error'
        })

    }
}

export async function login(req,res) {
    res.send("login")
}

export async function logout(req,res) {
    res.send("logout")
}