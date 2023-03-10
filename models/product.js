// const { urlencoded } = require('express');
const mongoose=require('mongoose');
// const imageSchema = new mongoose.Schema({
//     url: {
//       type: String,
//       required: true
//     }
    
//   });
const productSchema=new mongoose.Schema({
    id: {
        type:Number,
        required:true,
    },
    productname:{
        type: String,
        required: [true,"Name must be provided"],
    },
    price: {
        type: Number,
        required:[true,"price must be provided"]
    },
    img: {
        type:String,
        required:true
      },
    description: {
        type: String,
        default: "this is description"

    }
    
    
});
const Product = mongoose.model('Product', productSchema);
module.exports=Product


