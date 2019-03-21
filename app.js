const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const www = process.env.WWW || './';

const db = mongoose.connect('mongodb://localhost/bookAPI');
const Book = require('./model/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(www));


app.use('/api', bookRouter);
    
app.get('*', (req, res) => {
    res.send('Welcome to Api');
    // res.sendFile(`index.html`, { root: www });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
