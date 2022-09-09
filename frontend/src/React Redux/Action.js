const Actions = {
    adminAuth: (x)=>{
        return{
            type:"AUTH",
            payload: x   
        }
    } ,
    userAuth: (x , y )=>{
        return{
            type:"USER",
            payload: x,
            payload2: y,
          
        }
    }
}
export default Actions;