import * as actionTypes from './types';
import { } from './service';

export const fetchData = (data) => ({
  type: actionTypes.FETCH_DATA,
  payload: data,
});
