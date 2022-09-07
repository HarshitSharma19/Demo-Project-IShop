/*---------------------------------------------------------*/
import mongoose from "mongoose";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
const Schema = mongoose.Schema({
    name : {
        type: String,
        length: 30,
        require: true
    },
    details : {
        type: String,
        length: 500,
        require: true
    },
    weight : {
        type: Number,
        require: true
    },
    price : {
        type: Number,
        require: true
    },
    discount : {
        type: Number,
        require: false
    },
    image : {
        type: String,
        require: true
    },
    homepage: {
        type: Boolean,
        default: false
    },
    status: {
        type : Boolean,
        default : true
    }
})
/*---------------------------------------------------------*/
const ProductModel = mongoose.model("Product", Schema);
/*---------------------------------------------------------*/
export { ProductModel };
/*---------------------------------------------------------*/