const express = require('express');
require('./config')
const product = require('./product')

const app = express()
app.use(express.json())
app.post('/create', async (req, res) => {
    let data = new product(req.body)
    let result = await data.save()
    res.send(result)
})

app.get('/list', async (req, res)=>{
    let data = await product.find()
    res.send(data)
})

app.delete('/delete/:_id', async (req, res)=>{
    console.log(req.params)
    let data = await product.deleteOne(req.params)
    res.send(data)
})

app.put('/update/:_id', async (req, res)=>{
    console.log(req.params)
    let data = await product.updateOne(
        ////We are just using the id if we had sent name then these curly braces would be compulsory
        // {
            // name:'m40'
            req.params
        // }
        , 
    {$set:
        // {
        req.body
    // }
})
    res.send(data)
})

app.listen(4000)