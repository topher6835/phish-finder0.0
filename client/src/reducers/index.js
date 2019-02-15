import { combineReducers } from 'redux';
import yearsReducer from './yearsReducer';
import showsInYearsReducer from './showsInYearsReducer';
import allowYearClickReducer from './allowYearClickReducer';

export default combineReducers({
  years: yearsReducer,
  showsInYears: showsInYearsReducer,
  allowYearClick: allowYearClickReducer
});
