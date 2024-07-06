const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const port = process.env.PORT;  


app.get("/", (req, res) => {
    res.send("hello from api");
});

app.listen(port, (error) => {
    if (!error) {
        console.log("server running on port " + port);
    } else {
        console.log("error:" + error);
    }
});