import {SET_LOCATION} from '../types/locations';

const initialState = {
    locationId: null
};

function rootReducer(state = initialState, action) {
    if(action.type === SET_LOCATION) {
        return {
            ...state,
            locationId: action.payload
        }
    }

    return state;
}

export default rootReducer;