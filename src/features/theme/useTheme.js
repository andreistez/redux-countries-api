import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export const useTheme = () => {
	const theme = useSelector( state => state.theme )

	useEffect( () => {
		document.body.setAttribute( 'data-theme', theme )
	}, [theme] )

	return theme
}