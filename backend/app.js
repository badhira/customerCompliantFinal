const express = require('express');
const app = express();
const empRouter = require('./routes/customer.route');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors())
app.use(bodyParser.json());
//mongoose
mongoose.connect('mongodb+srv://userone:userone@cluster0.cidjqus.mongodb.net/emp_db?retryWrites=true&w=majority')
    .then((res) => {
        console.log('database is connected successfully')
    }).catch((err) => {
        console.log('oops something went wrong while connecting' + err)
    })


app.use('/customer', empRouter)
app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})