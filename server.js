const express = require("express");
const path = require("path");

app = express();

const PORT = process.env.PORT || 3000;

//static path
app.use(express.static(path.join(__dirname, "/assets")));


app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})