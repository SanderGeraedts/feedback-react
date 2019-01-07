import {SET_LOCATION} from '../types/locations';

export function setLocation(payload) {
    return {
        type: SET_LOCATION,
        payload
    }
}