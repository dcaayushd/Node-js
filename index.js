const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.send(`
    <h1>Welcome, This is a home page</h1> 
    <a href= '/about'>Go to about page</a>
    `)

})
app.get('/about', (req, res) => {
    res.send(`
        <input type ='text', placeholder = 'Username' value='${req.query.name}'/>
        <button>
        Click Me</button>
        <a href= '/'>Go to home page</a>
    `)
})
app.get('/help', (req, res) => {
    res.send([
        {
            name: 'aayush',
            email: 'aayush@test.com'
        },
        {
            name: 'Sita',
            email: 'sita@test.com'
        },
    ])
})

app.listen(4000)