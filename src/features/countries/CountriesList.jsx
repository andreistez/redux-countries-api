// Libs.
import { useNavigate } from 'react-router-dom'

// Components.
import { List } from '../../components/List'
import { Card } from '../../components/Card'

// Actions.
import { useCountries } from './useCountries'

const CountriesList = () => {
	const navigate								= useNavigate(),
		  [countries, { status, error }]	= useCountries()

	return (
		<div>
			{ error && <h2>Can't fetch data</h2> }
			{ status === 'loading' && <h2>Loading...</h2> }

			{
				( status === 'received' && countries.length ) ? (
					<List>
						{ countries.map( c => {
							const countryInfo = {
								img: c.flags.png,
								name: c.name,
								info: [
									{
										title: 'Population',
										description: c.population.toLocaleString()
									},
									{
										title: 'Region',
										description: c.region
									},
									{
										title: 'Capital',
										description: c.capital
									}
								]
							}

							return (
								<Card
									key={ c.name }
									onClick={ () => navigate( `/country/${ c.name }` ) }
									{ ...countryInfo }
								/>
							)
						} ) }
					</List>
				) : <h2>Nothing found</h2>
			}
		</div>
	)
}

export default CountriesList