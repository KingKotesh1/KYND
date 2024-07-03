const mongoose = require("mongoose");

const databaseUrl = 'mongodb+srv://kotesh18195:Eb3BEiX2fNzcxFUv@cluster0.elwjftf.mongodb.net/gohealthy?retryWrites=true&w=majority';

const connectToDB = async () => {
  try {
    await mongoose.connect(databaseUrl);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Failed to connect to Database");
  }
  const data = await mongoose.connection.db.collection("myfoods");
  const data2= await mongoose.connection.db.collection("myworks");

  const cursor = data.find();
  const cursor2= data2.find();

  const allValues = await cursor.toArray();
  const category = await cursor2.toArray();

  global.food_items=allValues;
  global.category=category;
  
};

module.exports = connectToDB;
