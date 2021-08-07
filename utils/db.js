const mongoose = require('mongoose');

async function connect(){
  try {
    await mongoose.connect(process.env.DB_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
  console.log("Connect successfully!")
  } catch (error) {
    console.log("Fail to connect!")
  }
  
}
module.exports = {connect};