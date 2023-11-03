// const mongoose = require('mongoose');

// // Your MongoDB connection URL (replace with your actual URL)
// const dbUrl = 'mongodb+srv://caApi:Mynewlife15@caapi.3giulzf.mongodb.net/CaApi';

// mongoose.connect(dbUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // useCreateIndex: true,
//   // useFindAndModify: false,
// });

// const connectToDatabase = mongoose.connection;

// connectToDatabase.on('error', (err) => {
//   console.error(`MongoDB connection error: ${err}`);
//   process.exit(1); 
// });

// connectToDatabase.once('open', () => {
//   console.log('Connected to MongoDB');
// });
//mongodb+srv://caApi:<password>@caapi.3giulzf.mongodb.net/
// module.exports = connectToDatabase;
// require("dotenv").config();
const mongoose = require("mongoose");
const uri="mongodb+srv://caApi:Mynewlife15@caapi.3giulzf.mongodb.net/CaApi";
async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database", error);
    throw error; 
  }
}

module.exports = connectToDatabase;
