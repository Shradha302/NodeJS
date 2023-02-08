const verifyToken = (req,resp,next)=>{
    const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader !== "undefined"){
        const bearer = bearerHeader.split(" ")
        const token = bearer[1]
        req.token=token;
        console.log("Next Calling"+req.token)

        next();
    }else{
        resp.send({
            result:'Token is not valid'
        })
    }
}

module.exports = verifyToken