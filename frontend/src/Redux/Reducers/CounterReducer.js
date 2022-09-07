const init = 0;

export default function counterReducer(state = init, actions){
    let finalState;
    switch(actions.type){
        case "Inc":{
            finalState = state + 1;
            break;
        }
        case "Dec":{
            if(finalState == 0){
                finalState = state;   
            }else{
                finalState = state - 1;
            }
            break;
        }
        default:{
            finalState = state
            break;
        }
    }
    return finalState;
}
