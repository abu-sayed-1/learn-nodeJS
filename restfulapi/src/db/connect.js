const mongoose = require("mongoose");

mongoose
  .connect("MongoDB connect URL here", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("connection is successful.. "))
  .catch((err) => console.log(err, "connection is fail.."));
