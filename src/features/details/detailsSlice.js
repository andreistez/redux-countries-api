import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { filterByCode, searchByCountry } from '../../config'

export const loadCountryByName = createAsyncThunk(
	'@@details/load-country-by-name',
	( name, { extra: { client, api } } ) => client.get( api.searchByCountry( name ) )
)

export const loadNeighborsByBorder = createAsyncThunk(
	'@@details/load-neighbors-by-border',
	( border, { extra: { client, api } } ) => client.get( api.filterByCode( border ) )
)

const initialState = {
	status		: 'idle',	// loading | received | rejected
	country		: null,
	error		: null,
	neighbors	: []
}

const detailsSlice = createSlice( {
	name: '@@details',
	initialState,
	reducers: {
		clearDetails: () => initialState
	},
	extraReducers: builder => {
		builder
			.addCase( loadCountryByName.pending, ( state ) => {
				state.status	= 'loading'
				state.error		= null
			} )
			.addCase( loadCountryByName.rejected, ( state, action ) => {
				state.error		= action.payload || action.meta.error
				state.status	= 'rejected'
			} )
			.addCase( loadCountryByName.fulfilled, ( state, action ) => {
				state.country	= action.payload.data[0]
				state.status	= 'received'
			} )
			.addCase( loadNeighborsByBorder.fulfilled, ( state, action ) => {
				state.neighbors	= action.payload.data.map( country => country.name )
			} )
	}
} )

export const { clearDetails } = detailsSlice.actions

export const selectDetails		= state => state.details
export const selectNeighbors	= state => state.details.neighbors

export default detailsSlice.reducer