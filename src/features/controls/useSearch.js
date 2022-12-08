import { useDispatch, useSelector } from 'react-redux'
import { selectSearch, setSearch } from './controlsSlice'

export const useSearch = () => {
	const dispatch  = useDispatch(),
		  search    = useSelector( selectSearch )

	return [search, e => dispatch( setSearch( e.target.value ) )]
}