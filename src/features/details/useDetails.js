// Libs.
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions.
import { selectDetails, clearDetails, loadCountryByName } from './detailsSlice'

export const useDetails = name => {
	const dispatch         			= useDispatch(),
		{ country, error, status }	= useSelector( selectDetails )

	useEffect( () => {
		dispatch( loadCountryByName( name ) )

		return () => {
			dispatch( clearDetails() )
		}
	}, [name, dispatch] )

	return { country, error, status }
}