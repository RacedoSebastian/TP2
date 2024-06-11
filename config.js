const mongoose = require("mongoose")

const dbConnect = () => {
    return mongoose.connect("mongodb://0.0.0.0:27017/clima")
        .then(() => console.log("base de dato conectada"))
        .catch((error) => { console.log("error", error) })
}

module.exports = { dbConnect }