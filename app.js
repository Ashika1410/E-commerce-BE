const express = require('express');
const bodyParser = require('body-parser');
const productRoute  = require('./Routes/productRoute');
const categoryRoute = require('./Routes/categoryRoute');
const userRoute = require('./Routes/userRoute');
const orderRoute = require('./Routes/orderRoute');
const cartRoute = require('./Routes/cartRoute');
const app = express();

app.use(bodyParser.json());

app.use('/product',productRoute);
app.use('/category',categoryRoute);
app.use('/user',userRoute);
app.use('/order',orderRoute);
app.use('/cart',cartRoute)

app.listen(7702,() => {
    console.log('Project is running');
}); 