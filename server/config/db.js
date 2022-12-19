const mongoose  = require('mongoose');

const connect  =  async()=>{
    // return mongoose.connect("mongodb+srv://mongo:mongo@cluster0.wgamhn8.mongodb.net/products?retryWrites=true&w=majority");
    return mongoose.connect("mongodb://127.0.0.1:27017/myntra");
}

module.exports = connect;