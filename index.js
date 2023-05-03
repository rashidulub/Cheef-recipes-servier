const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.port || 5000;  

const categories = require('./data/categories.json')
const chef = require('./data/chef.json')

app.use(cors())

app.get('/', (req, res)=>{
    res.send('chef project is running')
})  


app.get('/categories',(req,res)=>{
    res.send(categories)
})

app.get('/chef',(req,res)=>{
    res.send(chef);
})

app.get('/chef/:id',(req,res)=>{
    const id =req.params.id;
    const selectedChef = chef.find(n=>n._id === id)
    res.send(selectedChef);
})

app.get('/categories/:id',(req,res)=>{
    const id =parseInt (req.params.id);
    if(id ===0){
        res.send(chef)
    }
    else{
        const categoryChef = chef.filter(n=>parseInt(n.category_id) === id)
        res.send(categoryChef)

    }
   
})

app.listen(port, ()=>{
    console.log(`chef project is runnig on port: ${port}`);
})