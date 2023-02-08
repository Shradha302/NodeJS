//asynchronous nodejs
const express = require('express')
const app = express();
//use html in nodejs
app.get('',(request,response)=>{
    console.log(request.query.name)
    response.send(`
    <h1>Hello Home</h1>
    <a href="/about">GOTO HOME PAGE</a>
    `)
})
//showing html code in nodejs and use parameter value in url
app.get('/about',(request,response)=>{
    response.send(`<h1>Hello about</h1>
    <input placeholder="name" value="${request.query.name}" />
    <button>Click Me!</button>
    <a href="/">GOTO HOME PAGE</a>
    `)
})
//json request get from url
app.get('/help',(request,response)=>{
    response.send([{
        name:'anil' ,
        place: 'indore'
    },
    {
        name:'shradha' ,
        place: 'bhopal'
    }
])
})
app.listen(5009)