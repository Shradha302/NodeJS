const express = require('express')
const path = require('path')

const app = express();
const publicPath = path.join(__dirname,'public')
//adding template engine
app.set('view engine','ejs')
//get api
app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});

app.get('/profile',(_,resp)=>{
    const user ={
        name:'shradha',
        place:'bhopal',
        skills:['php','java','python','c++']
    }
    resp.render('profile',{user})
})

app.get('/help',(_,resp)=>{
    resp.render('help')
});
app.listen(3211)