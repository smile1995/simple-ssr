import {CHANGE_LOGIN} from "./constants";

const defaultState = {
    login: false
}
export default (state = defaultState, action: any) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return {
                ...state,
                login: action.login
            }
        default:
            return state;
    }
}