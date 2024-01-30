const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require("./db/User");
const product = require('./db/Product')

const Product = require('./db/Product');
const app = express();

app.use(express.json());
app.use(cors());

app.post("/add-product", async (req,resp)=>{
let product = new Product(req.body)
let result= await product.save();
resp.send(result)
})
