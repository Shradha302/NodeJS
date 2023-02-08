const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
app.use(cookieParser())

var morgan = require('morgan')
app.use(morgan("dev"))

app.get('/',(req,res)=>{
    res.cookie('cookie 1 ','value 1')
    res.cookie('cookie 2 ','value 2')
    res.cookie('cookie 3 ','value 3')
    res.cookie('cookie 4 ','value 4')
    res.cookie('cookie 5 ','value 5')
    res.send("Welcome to home page")
})
app.get('/cookies',(req,res)=>{
    res.send(req.cookies)
})
app.listen(9090)