const { response } = require("express");
const express = require("express");
const mongoose = require('mongoose')

const jwt = require("jsonwebtoken");
const app = express();
const verifyToken = require("./middlewares");
const secretKey = "secretkey";

app.get("/", (req, res) => {
  res.json({
    message: "sample api",
  });
});

mongoose.connect("mongodb://localhost:27017/demodb",{
    useNewUrlParser:true,useUnifiedTopology:true
},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('successfully connected to db')
        async function dbentry (){
        const userSchema = new mongoose.Schema({
            id: Number,
            username: String,
            email: String
        })
        const Users = mongoose.model('Users',userSchema)
        const userDetail = new Users({
            id : 101,
            username : 'Shradha',
            email : 'sa@gmail.com'
        })

        const user =  await userDetail.save();
        console.log(user)
        }
        dbentry()
    }
})



app.use(verifyToken);
app.post("/login", (req, resp) => {
//   const user = {
//     id: 101,
//     username: "shradha",
//     email: "s@gmail.com",
//   };
async function matchUser(){
    const currUser = await Users.find({username : shradha });
    console.log(currUser)
}
  matchUser()
  jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (err, token) => {
    resp.json({
      token,
    });
  });
});

app.post("/profile", verifyToken, (req, res) => {
  jwt.verify(req.token, secretKey, (err, authdata) => {
    if (err) {
      res.send("Error: Invalid");
    } else {
      res.json({
        message: "Token verified",
        authdata,
      });
    }
  });
});

app.listen(5000, () => {
  console.log("app running on port 5000");
});
