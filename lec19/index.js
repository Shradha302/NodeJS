//asynchronous nodejs
const express = require('express')
const app = express();

app.get('',(request,response)=>{
    console.log(request.query.name)
    response.send('Welcome to home page')
})
app.get('/about',(request,response)=>{
    response.send('Welcome to about page')
})
app.get('/help',(request,response)=>{
    response.send('Welcome to help page')
})
app.listen(5009)