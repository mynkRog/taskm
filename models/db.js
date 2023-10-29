const mongoose = require("mongoose");
mongoose
    .connect("mongodb://127.0.0.1:27017/taskm")
    .then(()=> console.log("DB connected to TASKM"))
    .catch((err)=>console.log(err));