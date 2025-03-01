// const http = require ("http");

// const server = http.createServer(function(req, res){
//     res.end("Hello BackEnd");
// })

// server.listen(3000);

const express = require ("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/profile/:username", function(req, res){
    res.send(`welcome ${req.params.username} `);
})


app.listen(3000)