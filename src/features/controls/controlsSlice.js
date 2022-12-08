import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	search	: '',
	region	: ''
}

const controlsSlice = createSlice( {
	name: '@@controls',
	initialState,
	reducers: {
		setSearch: ( state, { payload } ) => void ( state.search = payload ),
		setRegion: ( state, { payload } ) => void ( state.region = payload ),
		clearControls: () => initialState
	}
} )

export const { setSearch, setRegion, clearControls } = controlsSlice.actions

export const selectSearch	= state => state.controls.search
export const selectRegion	= state => state.controls.region
export const selectControls	= state => state.controls

export default controlsSlice.reducer