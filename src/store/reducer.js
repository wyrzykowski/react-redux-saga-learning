const initialState = {
    age: 21,
    data: {},
    history: [],
}

const reducer = (state = initialState, action) => {
    const newState = { ...state }


    switch (action.type) {
        //Nazwa akcji nawiazuje do tej w sadze, a dispatcher bedzie sie nazywal jak ta co wywoluje sage [SAGA]
        case "AGE_UP_ASYNC":
            return {
                ...state,
                data: action.data,
                age: state.age + action.value,
                history: state.history.concat({ age: state.age + action.value })
            }
            break;

        case "AGE_DOWN":
            return {
                ...state,
                age: state.age - action.value,
                history: state.history.concat({ age: state.age - action.value })
            }
            break;

        default: return newState;

    }

}

export default reducer;
