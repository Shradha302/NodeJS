const express = require('express')
const reqFilter = require('./middlewares')
const errFilter = require('./errormiddleware')
const routes = express.Router();

const app= express();
//request middleware
routes.use(errFilter,reqFilter);
//built-in middleware
app.use(express.json())
app.use(express.raw())
app.use(express.urlencoded())
app.use(express.text())
app.use(express.static('./index.html'))

app.get('/',(req,resp)=>{
    resp.send(req.body)

})

app.get('/users',(req,resp)=>{
    resp.send('Welcome to Users Page!')
})

routes.get('/about',(req,resp)=>{
    resp.send('Welcome to About Page!')
})
//applying group route level middlewares
routes.get('/help',(req,resp)=>{
    resp.send('Welcome to Help Page!')
})
app.use('/',routes)
app.listen(8092)