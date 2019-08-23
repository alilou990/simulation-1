require('dotenv').config()
const express = require('express');
const cors = require('cors');
const massive = require('massive')

//Set up app
const app = express();

//ENV variables
const {
    CONNECTION_STRING
} = process.env

//TLM
app.use(express.json());
app.use(cors());

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance);
    console.log('Database Running!')
})

//ENDPOINTS
//app.get();
//app.post();
//app.put();
//app.delete();

app.listen(8080, () => {
    console.log('Server Running!')
})