// Libs.
import { useNavigate, useParams } from 'react-router-dom'

// Components.
import { IoArrowBack } from 'react-icons/io5'
import { Button } from '../components/Button'
import CountryDetails from '../features/details/CountryDetails'

export const Details = () => {
	const navigate	= useNavigate(),
		  { name }	= useParams()

	return (
		<div>
			<Button onClick={ () => navigate( -1 ) }>
				<IoArrowBack/> Back
			</Button>
			<CountryDetails name={ name } navigate={ navigate } />
		</div>
	)
}
