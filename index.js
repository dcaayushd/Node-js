const express = require('express')
const path = require('path')

const app = express()
const publicPath = path.join(__dirname,'/public')

// app.use(express.static(publicPath))

app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})
app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get('/help',(_,res)=>{
    res.sendFile(`${publicPath}/help.html`)
})
app.get('*',(_,res)=>{
    res.sendFile(`${publicPath}/404.html`)
})


app.listen(4000)