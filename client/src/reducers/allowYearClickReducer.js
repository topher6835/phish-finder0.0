import { CLICK_YEAR } from '../actions/types';

const initialState =  true;
export default function (state = initialState, action) {
    switch (action.type) {
        case CLICK_YEAR:
            return !state;
        default:
            return state;
    }
};