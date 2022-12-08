import { useDispatch, useSelector } from 'react-redux'
import { selectRegion, setRegion } from './controlsSlice'

export const useRegion = () => {
	const region	= useSelector( selectRegion ),
		  dispatch	= useDispatch()

	return [region, e => dispatch( setRegion( e?.value || '' ) )]
}