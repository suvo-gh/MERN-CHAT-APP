const express = require("express");
const dotenv = require("dotenv");
dotenv.config(); 

const chats = require("./data/data");

const app = express();

app.get("/", (req, res) => {
  res.send("API is started successfully");
});

app.get("/api/chats", (req, res) => {
    console.log(chats)
  res.send(chats);
});

app.get("/api/chats/:id", (req,res) => {
    const singleChat = chats.find(c => c._id === req.params.id);
    res.send(singleChat)
})

const PORT =  process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`));
