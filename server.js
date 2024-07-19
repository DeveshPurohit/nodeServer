const express = require("express");
const app = express();
const cors = require ("cors");
const { client } = require("./database/postgresql");
const PORT = 8080;

app.use(cors());

app.get("/api/home", (req, res) => {
    res.json({message: "Hey from Devesh Purohit"})
})

client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(PORT, () => {
    console.log(`server started on port : ${PORT}`);
})