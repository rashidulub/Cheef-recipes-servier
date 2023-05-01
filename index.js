const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.port || 5000;  

const categories = require('./data/categories.json')

app.use(cors())

app.get('/', (req, res)=>{
    res.send('chef project is running')
})


app.get('/categories',(req,res)=>{
    res.send(categories)
})

app.listen(port, ()=>{
    console.log(`chef project is runnig on port: ${port}`);
})