export const counterReducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case "+":
            return { value: state.value + 1 };
        case "-":
            return { value: state.value - 1 };
        default:
            return state;
    }
}