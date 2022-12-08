import { useDispatch } from 'react-redux'

import { clearControls } from './controlsSlice'

export const useCleanUp = () => {
	const dispatch = useDispatch()

	return () => dispatch( clearControls() )
}