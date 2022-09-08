const Actions = {
    adminAuth: (x)=>{
        return{
            type:"AUTH",
            payload: x   
        }
    }
}
export default Actions;