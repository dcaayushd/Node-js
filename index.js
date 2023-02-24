const express = require('express')
const app = express()

app.get('',(req, res)=>{
    res.send('Welcome User, This is a home page')
})
app.get('/about',(req, res)=>{
    res.send('Welcome User, This is a About page')
})
app.get('/help',(req, res)=>{
    res.send('Welcome User, This is a Help page')
})
app.get('/contact',(req, res)=>{
    res.send('Welcome User, This is a Contact page')
})
app.listen(4000)