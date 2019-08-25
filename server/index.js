require('dotenv').config();
const express = require('express');
const massive = require('massive');
const cors = require('cors');

//controllers
const ctrl = require('./controller')

//Set up app
const app = express();

//ENV variables
const {
    CONNECTION_STRING
} = process.env

//TLM
app.use(express.json());
app.use(cors())

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance);
    console.log('Database Running!')
})
.catch(err => console.log(err));

//ENDPOINTS
app.get('/api/inventory', ctrl.getInventory);
app.get('/api/inventory/:id', ctrl.getItem)
app.post('/api/inventory', ctrl.createItem);
app.put('/api/inventory/:id', ctrl.updateItem);
app.delete('/api/inventory/:id', ctrl.deleteItem);

app.listen(8080, () => {
    console.log('Server Running!')
})