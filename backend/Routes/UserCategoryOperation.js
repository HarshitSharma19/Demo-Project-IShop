/*---------------------------------------------------------*/
import Express from "express";
import { CategoryController } from "../Controller/CategoryController.js";
/*---------------------------------------------------------*/

const UserCategoryOperation = Express.Router();

/*READ Opr*/
UserCategoryOperation.get("/alldata",async(req , res)=>{
    await new CategoryController().getCategory().then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*READ Opr*/

/*---------------------------------------------------------*/
export { UserCategoryOperation };
/*---------------------------------------------------------*/