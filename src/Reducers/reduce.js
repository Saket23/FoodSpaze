const INITIAL_STATE = { apidata:''
};

export default (state = INITIAL_STATE,action) => {
    switch(action.type){
        case 'actionType':
           return {...state,apidata:action.payload};
        default:
            return state;
    }
};