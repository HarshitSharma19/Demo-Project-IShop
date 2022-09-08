const init = ""
const Reducer1 = (state = init, Actions)=>{
    let Final
    switch(Actions.type){
        case "AUTH":
            Final = Actions.payload
            break;
        default:
            Final = state;
            break;
    }
    return Final;
}
export default Reducer1