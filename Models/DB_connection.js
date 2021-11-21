const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.db_url;
mongoose
  .connect(url, {  
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
