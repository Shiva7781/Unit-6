const mongoose = require("mongoose");
const connect = () =>{
    mongoose.connect("mongodb+srv://final:final@cluster0.mbty6u5.mongodb.net/?retryWrites=true&w=majority")
}

module.exports = connect;