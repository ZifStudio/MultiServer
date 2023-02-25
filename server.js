// this is the entry point for our whole application

var express = require("express");


var app = express();

app.get("/", (req, res) => {
    res.send("Hello, here is your Unity WebGL game!");
})
app.get("/users/:id", (req, res) => {
    // 유저정보를 반환함 예로 승수,패수,기타
    // 목표는 디비에서 정보를 읽어서 보내는걸 목표로함
    var dummyData = {
        "userid": req.params["id"],
        "username": "ZifStudio",
        "wins": 5,
        "losses": 3
    };

    res.json(dummyData);
    //res.send(req.params["id"]);
});

app.listen(8000, () => {
    console.log("Server has started!");
});