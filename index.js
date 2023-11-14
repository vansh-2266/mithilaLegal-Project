const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(initial_path, "about.html"));
})

app.get('/career', (req, res) => {
    res.sendFile(path.join(initial_path, "career.html"));
})


app.use((req, res) =>{
    res.json("404");
})

app.listen("9000", () => {
    console.log('listening.... http://localhost:9000/');
})