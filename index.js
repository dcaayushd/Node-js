const express = require('express');
const app = express();

const reqFilter =(req,res,next)=>{
    if(!req.query.age){
        res.send('Please provide age')
    }
    else if(req.query.age <= 18){
        res.send('You cannot access this page')
    } else{
        next()
    }
}
app.use(reqFilter)


app.get('/', (req, res) => {
    res.send('Welcome to home page')
})
app.get('/users', (req, res) => {
    res.send('Welcome to users page')
})

app.listen(4000)