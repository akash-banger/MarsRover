const express = require("express");
const path = require('path');
const app = express();
const port = 80;

// For serving static files
app.use('/static',express.static('static'));

// set the template engine as pug
app.set('view engine','pug');

// Set the views directory 
app.set('views',path.join(__dirname,'views'));

// our pug demo endpoint 
app.get('/', (req, res) => {
    res.status(200).render('index.pug')
})
app.get('/Home', (req, res) => {
    res.status(200).render('index.pug')
})
app.get('/About', (req, res) => {
    res.status(200).render('index.pug')
})
app.get('/Services', (req, res) => {
    res.status(200).render('index.pug')
})
app.get('/ClassInfo', (req, res) => {
    res.status(200).render('index.pug')
})
app.get('/ContactUs', (req, res) => {
    res.status(200).render('index.pug')
})
app.listen(port,()=>{
    console.log(`The application is started successfully on port ${port}`);
})
