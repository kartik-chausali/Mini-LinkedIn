const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');
const secret = "secret"
const pool = require('../db/pool');
const z = require('zod')
const bcrypt = require('bcrypt')
const salt = 10;

const User = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string(),
    bio: z.string().optional()
})

const SigninInput = z.object({
    email:z.email(),
    password: z.string()
})

router.get('/' , (req , res)=>{
    res.send("from user router")
})

router.post('/signup' , async(req, res)=>{
    const {email , password , bio , name } = req.body;

    const data = User.safeParse({
        name,
        email, 
        password,
        bio
    })  
    
    if(!data.success){
        return res.status(400).json({msg: "Invalid credentials , please try again"});
    }

    try{

        const hashedPass =  await bcrypt.hash(password , salt);
        const result = await pool.query(`INSERT INTO users (name , email , password , bio) VALUES ($1 , $2 , $3 , $4) RETURNING *` , [name , email , hashedPass , bio]);
        const user = result.rows[0];
        const token = jwt.sign({id: user.u_id} , secret);
        return res.status(200).json({jwt: token , u_id: user.u_id , name:user.name});

    }catch(err){
        return res.status(402).json({msg: "Error while signup" , err});
    }
    
})

router.post('/signin' , async(req, res)=>{
    const {email , password} = req.body;

    const parseData = SigninInput.safeParse({
        email,
        password
    })

    if(!parseData.success){
        return res.status(400).json({msg:"Invalid credentials"});
    }
    
    try{
        const result = await pool.query(`SELECT u_id , email, password, name FROM users WHERE email = $1` , [email]);
       
        if(result.rows.length == 0){
            return res.status(400).json({msg:"No registered user with this credentials"})
        }
        const user = result.rows[0];
        const decryptPass = await bcrypt.compare(password , user.password );
        if(!decryptPass){
            return res.status(400).json({msg:"Wrong Password"});
        }

        const token = jwt.sign({id: user.u_id} , secret);
        return res.status(200).json({jwt: token,  u_id: user.u_id , name:user.name});
    }catch(err){
       return res.status(402).json({msg: "Error while signin" , err});
    }
})

module.exports = router