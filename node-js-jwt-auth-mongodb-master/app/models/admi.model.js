const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    myfirstname: String,
    mymiddlename: String,
    mylastname: String,
    roll: String,
    course:String,
    myyear:String,
    mysemester:String,
    mycgpa : String,
    mycategory : String,
    phone : String,
    pphone : String,
    mydate : String,
    myvillage : String,
   
  })
);

module.exports = User;
