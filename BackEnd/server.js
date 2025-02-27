// const http = require ("http");

// const server = http.createServer(function(req, res){
//     res.end("Hello BackEnd");
// })

// server.listen(3000);

const express = require ("express")
const app = express()

app.use(function(req, res, next){
    console.log("Landing page");
    next();
})

app.get("/", function (req, res){
    res.send("Hello world")
})

app.get("/profile", function (req, res){
    res.send("Profile Page")
})

app.get("/about", function(req, res, next){
    return next (new Error("hellooooo, something went wrong"))
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("something went wrong")
})

app.listen(3000)