const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: '*'
}))

app.use(express.json());

app.get('/api',(req,res)=>{
  res.json('hello')
})

app.listen(8000,()=>{
  console.log('App is running on port', 8000)
})