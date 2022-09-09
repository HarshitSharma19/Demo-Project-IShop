const init = {
    userAuth : "",
    name: ""
}
const Reducer2 = (state = init, Actions)=>{
    let Final = {}
    switch(Actions.type){
        case "USER":
            Final = {
                userAuth : Actions.payload,
                name: Actions.payload2,
            }
            break;  
        default:
            Final = state;
            break;
    }
    return Final;
}
export default Reducer2;