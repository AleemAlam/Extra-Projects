const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.evn.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Mongodb Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDB;
