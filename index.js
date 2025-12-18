const express = require("express")
const app = express()

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.get("/chinese-new-year", (req, res) => {
  res.sendFile(__dirname + "/public/chinese-new-year.html");
})

app.get("/japanese-new-year", (req, res) => {
  res.sendFile(__dirname + "/public/japanese-new-year.html");
})

app.get("/exotic-christmas", (req, res) => {
  res.sendFile(__dirname + "/public/exotic-christmas.html");
})

app.listen(3000, () => {
  console.log(`Holiday Server is Running!`)
});
