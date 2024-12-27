const mongoose = require("mongoose");
const config = require("config");
const dbgr = require("debug")("development:mongoose-connection.js");
mongoose
  .connect(`${config.get("MONGODB_URI")}/scratch`) //local mongoose connection
  .then(() => {
    dbgr("Connected");
  })
  .catch((err) => {
    dbgr(err);
  });
module.exports = mongoose.connection;
