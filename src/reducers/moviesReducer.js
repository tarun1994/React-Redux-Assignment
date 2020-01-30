// import * as types from '../../constants/actionTypes';
// import initialState from '../../reducers/initialState';
export const FETCH_POPULAR = 'FETCH_POPULAR';
const initialState = {
    searchedMovies:[]
}
export default function (state = initialState, action) {
	switch (action.type) {

		case FETCH_POPULAR:
			return {
				...state,
				searchedMovies: action.payload
			};
		default:
			return state;
	}
}