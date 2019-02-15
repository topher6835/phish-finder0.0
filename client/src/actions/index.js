import axios from 'axios';
import { FETCH_YEARS, FETCH_SHOWS, CLICK_YEAR } from './types';

export const fetchYears = () => {
  console.log('fetching years');
  return function(dispatch) {
    axios.get('/api/all_years')
      .then(res => 
        dispatch({ type: FETCH_YEARS, payload: res.data })
      );
  };
};

const createShowObj = (resData) => {
  let showObj = {};
  resData.map((show) => {
    showObj[show.id] = show;
  })
  return showObj;
}

export const fetchShows1 = (year) => async dispatch => {
  console.log('calling api...');
  const res = await axios.get(`/api/shows_in_year/${year}`);
  const showPayloadObj = createShowObj(res.data.data);
  console.log('showPayloadObj', showPayloadObj);

  dispatch({ type: FETCH_SHOWS, payload: showPayloadObj, meta: {year: year} });
}

export const fetchShowsTest = (year) => {
  return function(dispatch) {
    dispatch({ type: FETCH_SHOWS, payload: year, meta: {year: year} });
  }
}

// export const allowClickYearToggle = () => {
//   console.log('allow toggle action');
//   return function(dispatch) {
//     dispatch({ type: CLICK_YEAR });
//   }
// }

export const allowClickYearToggle = () => dispatch => {
  dispatch({
    type: CLICK_YEAR
  })
  return Promise.resolve();
}
