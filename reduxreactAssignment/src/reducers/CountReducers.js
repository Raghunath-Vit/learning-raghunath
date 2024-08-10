
const initialState={count:5};
const CountReducers = (state=initialState,action) => {
    console.log(state);
    console.log(action);
    if (action.type==="INCREASE")
    {
        let newState={...state,count:state.count+action.step};
        return newState;
    }
    if(action.type==="DECREASE")
    {
        let newState={...state,count:state.count-action.step};
        return newState;
    }
    return state;
};
export default CountReducers;
