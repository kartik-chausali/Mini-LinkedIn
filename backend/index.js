const express = require('express')
const initDb = require('./db/initDb')
const app = express();
app.use(express.json());
const cors = require('cors')
app.use(cors())
const userRouter = require('./routes/user')
const postRouter = require('./routes/post')

initDb();

app.use('/users' , userRouter);
app.use('/posts' , postRouter)

app.get('/' , (req , res)=> res.send('hello world'))

app.listen(3000 , ()=> console.log('listening at port 3000'))