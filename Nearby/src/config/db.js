const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
        "mongodb+srv://final:final@cluster0.mbty6u5.mongodb.net/nearby?retryWrites=true&w=majority"
    )
};

module.exports = connect;