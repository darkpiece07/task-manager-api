const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/discuss_now").then(() => {
    console.log("connection established")
}).catch(() => {
    console.log("there is an error")
})