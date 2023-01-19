const User = require('../Models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret_key = process.env.access_key


const signUp = async(req,res)=>{
    const {creator_name,user_id,password} = req.body;
    try {
        const user = await User.findOne({user_id});
        if(user){
            return res.status(401).send('User Already Exists')
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await User.create({creator_name,user_id,password:hashedPassword});
        newUser.save();
        return res.status(200).send({message:'Successfully Created',newUser})
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const signIn = async(req,res)=>{
    const {user_id,password} = req.body;
    try {
        const user = await User.findOne({user_id});
        // console.log(user)
        if(!user){
            return res.status(401).send('User Not Exists')
        }else{
        const match = bcrypt.compareSync(password,user.password)
       if(!match){
        return res.status(403).send('Invalid Credentials')
       }
    
       const accessToken = jwt.sign({id:user._id},secret_key,{expiresIn:"60min"})
        return res.status(200).send({message:'Successfully Logged In',accessToken,userId:user._id})
    }
    } catch (error) {
        res.status(500).send(error.message)
    }
};



module.exports = {signUp,signIn}