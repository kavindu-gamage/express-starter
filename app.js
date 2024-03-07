const express = require('express')
const mongoose = require('mongoose')
const app = express();
const port = 3000

//import routes
const customer = require('./routes/customer')
const item = require('./routes/item')

//middleware
app.use(express.json());
app.use('/api/customers', customer);
app.use('api/items', item);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

mongoose.connect('mongodb+srv://kavindu_98:1234@cluster1.rp7xknz.mongodb.net/express_test?retryWrites=true&w=majority&appName=Cluster1')
.then(() => {
   console.log('Databse Connected') 
}).catch((err) => {
    console.log('error in connected to the databse' , err);
});