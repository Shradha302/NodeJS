const express = require('express')
const reqFilter = require('./middlewares')
const routes = express.Router();

const app= express();
//request middleware
routes.use(reqFilter);

app.get('/',(req,resp)=>{
    resp.send('Welcome to Home Page!')
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