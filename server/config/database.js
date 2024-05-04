const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const MONGO_URL =
  process.env.MONGODB_URL ||
  "mongodb+srv://ishan-gupta:jee@cluster0.kzaozei.mongodb.net/EDtech";
exports.connect = () => {
  mongoose
    .connect(MONGO_URL, {
      useNewUrlparser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`DB Connection Success,${MONGO_URL}`))
    .catch((err) => {
      console.log(`DB Connection Failed`);
      console.log(err);
      process.exit(1);
    });
};
