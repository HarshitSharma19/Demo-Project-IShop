/*---------------------------------------------------------*/
import mongoose from "mongoose";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
const Schema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    logo: {
        type: String,
        require: true,
        unique: true
    },
    status: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
})
/*---------------------------------------------------------*/
const BrandModel = mongoose.model("Brand", Schema);
/*---------------------------------------------------------*/
export { BrandModel };
/*---------------------------------------------------------*/