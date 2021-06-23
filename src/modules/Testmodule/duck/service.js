import { FETCH_DATA_URL } from '../constants';

export const fetchData = () => axios({ url: FETCH_DATA_URL, method: 'GET' });
