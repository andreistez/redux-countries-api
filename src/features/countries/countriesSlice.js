import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const loadCountries = createAsyncThunk(
	'@@countries/load-countries',
	( _, { extra: { client, api } } ) => client.get( api.ALL_COUNTRIES )
)

const initialState = {
	status	: 'idle',	// loading | received | rejected
	error	: null,
	list	: []
}

const countriesSlice = createSlice( {
	name: '@@countries',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase( loadCountries.pending, ( state ) => {
				state.status	= 'loading'
				state.error		= null
			} )
			.addCase( loadCountries.rejected, ( state, action ) => {
				state.status 	= 'rejected'
				state.error		= action.payload || action.meta.error
			} )
			.addCase( loadCountries.fulfilled, ( state, action ) => {
				state.status 	= 'received'
				state.list		= action.payload.data
			} )
	}
} )

export const selectCountriesInfo = ( { countries } ) => ( {
	status	: countries.status,
	error	: countries.error,
	qty		: countries.list.length
} )

export const selectVisibleCountries = ( state, { search = '', region = '' } ) => {
	if( ! search && ! region ) return state.countries.list

	return state.countries.list.filter(
		country => (
			country.name.toLowerCase().includes( search.toLowerCase() ) &&
			country.region.toLowerCase().includes( region.toLowerCase() )
		)
	)
}

export default countriesSlice.reducer