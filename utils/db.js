const mongoose = require('mongoose');
async function connect(){
  try {
    await mongoose.connect('mongodb+srv://namlehoai:namlehoai73@cluster0.nscvy.mongodb.net/products-mongo?retryWrites=true&w=majority', {
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