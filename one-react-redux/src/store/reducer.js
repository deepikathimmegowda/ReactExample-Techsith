const initialState = {
    age :21,
    history : []
};

const reducer = (state = initialState, action) => {
    const newState = {...state}; //copy to new variable
    if(action.type === 'AGE_UP'){
        return{
            ...state,
            age : state.age + action.value,
            history : state.history.concat({ id : Math.random(), age : state.age + action.value})
        }
    }
    else if(action.type === 'AGE_DOWN'){
        return{
            ...state,
            age : state.age - action.value,
            history : state.history.concat({  id : Math.random(), age : state.age - action.value})

        }    
    }
    else if(action.type === 'DEL_ITEM'){
        return{
            ...state,
            history : state.history.filter( el => el.id !== action.key)

        }    
    }
    return newState;
}

export default reducer;