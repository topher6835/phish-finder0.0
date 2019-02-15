import { FETCH_SHOWS } from '../actions/types';

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_SHOWS:
            const payloadData = [action.payload];

            return {...state, [action.meta.year]: action.payload};
        default:
            return state;
    }
}