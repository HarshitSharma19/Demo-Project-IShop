/*---------------------------------------------------------*/
import Express from "express";
import { ProductController } from "../Controller/ProductController.js";
/*---------------------------------------------------------*/

const UserProductOperation = Express.Router();

/*READ Opr*/
UserProductOperation.get("/alldata",async(req , res)=>{
    await new ProductController().getProduct().then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*READ Opr*/

/*READ GT Opr*/
UserProductOperation.get("/gtdata",async(req , res)=>{
    const price = req.body.price
    await new ProductController().getGtProduct(price).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*READ GT Opr*/

/*READ Lt Opr*/
UserProductOperation.get("/ltdata",async(req , res)=>{
    const price = req.body.price
    await new ProductController().getLtProduct(price).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*READ Lt Opr*/

/*READ JOIN Opr*/
UserProductOperation.get("/categoryjoin",async(req , res)=>{
    await new ProductController().joinCategory().then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})

UserProductOperation.get("/brandjoin",async(req , res)=>{
    await new ProductController().joinBrand().then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*READ JOIN Opr*/

/*---------------------------------------------------------*/
export { UserProductOperation };
/*---------------------------------------------------------*/