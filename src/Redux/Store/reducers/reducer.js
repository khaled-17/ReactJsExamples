const counterReducer = (state = 1, action) => {

    console.log(action);
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;

        default:
            return state;
    }
};
export default counterReducer;
