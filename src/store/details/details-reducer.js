import { CLEAR_DETAILS, SET_COUNTRY, SET_ERROR, SET_LOADING } from './details-actions'

const initialState = {
	status	: 'idle',	// loading | received | rejected
	country	: null,
	error	: null
}

export const detailsReducer = ( state = initialState, { type, payload } ) => {
	switch( type ){
		case SET_LOADING:
			return { ...state, status: 'loading' }

		case SET_ERROR:
			return { ...state, error: payload, status: 'rejected' }

		case SET_COUNTRY:
			return { ...state, country: payload, status: 'received' }

		case CLEAR_DETAILS:
			return initialState

		default:
			return state
	}
}