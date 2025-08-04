const express = require('express')
const z = require('zod');
const authenticateToken = require('../middleware/auth');
const pool = require('../db/pool');
const router = express.Router();

const postSchema = z.object({
  authorName: z.string().min(1),
  text: z.string().min(1)
});


router.post('/submit' , authenticateToken, async(req, res)=>{

    const {authorName , text} = req.body;
    const u_id = req.user.id;
    console.log("id" , u_id , authorName, text);

    const parseData = postSchema.safeParse(req.body);

    if (!parseData.success) {
    return res.status(400).json({ msg: "Invalid post data", error: parseData.error });
    }

    try{    

        const result = await pool.query(`INSERT INTO posts (u_id , author_Name , text) VALUES ($1 , $2 , $3) RETURNING *` , [u_id, authorName , text])
        const post = result.rows[0];
        return res.status(200).json(post);

    }catch(err){
        return res.status(402).json({msg: "Error while making Post" , err});
    }
})

router.get('/allPosts' , authenticateToken , async(req, res)=>{

    try{
        const result = await pool.query(`SELECT * FROM posts ORDER BY created_at DESC`);
        const posts = result.rows;
        console.log(posts);
        return res.status(200).json(posts);
    }catch(err){
         return res.status(402).json({msg: "Error while fetching Posts" , err});
    }
})

module.exports = router