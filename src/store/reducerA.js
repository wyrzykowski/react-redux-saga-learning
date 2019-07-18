const initialState = {
    a: 0
}

const reducerA = (state = initialState, action) => {
    const newState = { ...state }


    switch (action.type) {


        case "A_UP":
            return {
                ...state,
                a: state.a + action.valueA,
            }
            break;

        default: return newState;

    }

}

export default reducerA;
