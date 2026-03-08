const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({

name:{
type:String,
required:true
},

price:{
type:String,
required:true
},

address:{
type:String,
required:true
},

description:{
type:String,
required:true
},

image:{
type:String,
required:true
}

});

module.exports = mongoose.model("Shop",shopSchema);