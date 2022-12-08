// Libs.
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions.
import { loadCountries, selectCountriesInfo, selectVisibleCountries } from './countriesSlice'
import { selectControls } from '../controls/controlsSlice'

export const useCountries = () => {
	const controls					= useSelector( selectControls ),
		  countries					= useSelector( state => selectVisibleCountries( state, controls ) ),
		  { status, error, qty }	= useSelector( selectCountriesInfo ),
		  dispatch					= useDispatch()

	useEffect( () => {
		if( ! qty ) dispatch( loadCountries() )
	}, [qty, dispatch] )

	return [countries, { status, error, qty }]
}