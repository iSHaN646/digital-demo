const mongoose = require("mongoose");
const dotenv = require("dotenv").config();


exports.connect = () => {
  mongoose
    .connect("mongodb+srv://ishan-gupta:jee@cluster0.kzaozei.mongodb.net/EDtech", {
      useNewUrlparser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`DB Connection Success`))
    .catch((err) => {
      console.log(`DB Connection Failed`);
      console.log(err);
      process.exit(1);
    });
};
