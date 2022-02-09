const initialstate = {
    number: 0
};

const reducer = (state = initialstate, action) => {
    const newState = { ...state }
    switch (action.type) {
        case "increment":
            newState.number += action.value;
            break;

        case "decrement":
            newState.number -= action.value;
            break;
        case "reset":
            newState.number = action.value;
            break;
    }
    return newState;

}

export default reducer;