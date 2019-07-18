const initialState = {
    b: 0
}

const reducerB = (state = initialState, action) => {
    const newState = { ...state }


    switch (action.type) {

        case "B_UP":
            return {
                ...state,
                b: state.b + action.valueB,
            }
            break;

        default: return newState;

    }

}

export default reducerB;
