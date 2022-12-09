// Components.
import { Info } from './Info'

// Hooks.
import { useDetails } from './useDetails'

const CountryDetails = ( { name, navigate } ) => {
	const { country, error, status } = useDetails( name )

	return (
		<>
			{ status === 'loading' && <h2>Loading...</h2> }
			{ error && <h3>{ error }</h3> }
			{ country && <Info push={ navigate } { ...country } /> }
		</>
	)
}

export default CountryDetails