const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')


app.set('view engine','ejs');

app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});

app.get('/profile',(_,resp)=>{
    const user={
        name:'Aayush',
        email:'aayush@test.com',
        country:'Nepal',
        skills:[
            'c',
            'c++',
            'java', 
            'android', 
            'dart', 
            'node',
        ]
    }
   resp.render('profile',{user})
});

app.get('/login', (_, res)=>{
    res.render('login')
})

app.get('/contact',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
});

app.get('/help',(_,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
});

app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
});

app.listen(4000);