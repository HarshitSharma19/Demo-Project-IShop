const Actions = {
    adminAuth: (x)=>{
        return{
            type:"AUTH",
            payload: x   
        }
    } ,
    userAuth: (x , y , z)=>{
        return{
            type:"USER",
            payload: x,
            payload2: y,
            payload3: z
        }
    }
}
export default Actions;