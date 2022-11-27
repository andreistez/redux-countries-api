export const SET_LOADING	= '@@details/SET_LOADING'
export const SET_ERROR		= '@@details/SET_ERROR'
export const SET_COUNTRY	= '@@details/SET_COUNTRY'
export const CLEAR_DETAILS	= '@@details/CLEAR_DETAILS'
export const SET_NEIGHBORS	= '@@details/SET_NEIGHBORS'

const setLoading = () => ( { type: SET_LOADING } )

const setError = err => ( {
	type	: SET_ERROR,
	payload	: err
} )

const setCountry = country => ( {
	type	: SET_COUNTRY,
	payload	: country
} )

const setNeighbors = neighbors => ( {
	type	: SET_NEIGHBORS,
	payload	: neighbors
} )

export const clearDetails = () => ( { type: CLEAR_DETAILS } )

export const loadCountryByName = name => ( dispatch, _, { client, api } ) => {
	dispatch( setLoading() )

	client.get( api.searchByCountry( name ) )
		.then( ( { data } ) => dispatch( setCountry( data[0] ) ) )
		.catch( err => dispatch( setError( err ) ) )
}

export const loadNeighbors = codes => ( dispatch, _, { client, api } ) => {
	client.get( api.filterByCode( codes ) )
		.then( ( { data } ) => dispatch( setNeighbors( data.map( c => c.name ) ) ) )
		.catch( err => console.error( err ) )
}