/*---------------------------------------------------------*/
import Express from "express";
import { BrandController } from "../Controller/BrandController.js";
/*---------------------------------------------------------*/

const UserBrandOperation = Express.Router();

/*READ Opr*/
UserBrandOperation.get("/alldata",async(req , res)=>{
    await new BrandController().getBrand().then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*READ Opr*/
/*---------------------------------------------------------*/
export { UserBrandOperation };
/*---------------------------------------------------------*/