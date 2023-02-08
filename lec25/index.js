const express = require('express')

const app= express();
//request middleware
const reqFilter = (req,resp,next)=>{
    //console.log('reqFilter')
    if(!req.query.age){
        resp.send('Please provide age')
    }else if(req.query.age < 18){
        resp.send('You cannot access this page!')
    }
    else{
        next();
    }
}
app.use(reqFilter);
app.get('/',(req,resp)=>{
    resp.send('Welcome to Home Page!')
})

app.get('/users',(req,resp)=>{
    resp.send('Welcome to Users Page!')
})

app.listen(8099)