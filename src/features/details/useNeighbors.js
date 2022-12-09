import { useDispatch, useSelector } from 'react-redux'
import { loadNeighborsByBorder, selectNeighbors } from './detailsSlice'
import { useEffect } from 'react'

export const useNeighbors = borders => {
	const dispatch	= useDispatch(),
		  neighbors	= useSelector( selectNeighbors )

	useEffect( () => {
		if( borders.length ) dispatch( loadNeighborsByBorder( borders ) )
	}, [borders, dispatch] )

	return neighbors
}