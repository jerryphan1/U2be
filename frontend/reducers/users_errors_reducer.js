import { RECEIVE_USER_ERRORS, RECEIVE_USER } from "../actions/user_actions";


const UsersErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return action.errors;
        case RECEIVE_USER:
            return [];
        default:
            return state;
    }
}

export default UsersErrorsReducer;