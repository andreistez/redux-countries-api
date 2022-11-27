import { useNavigate } from 'react-router-dom'

import { List } from '../components/List'
import { Card } from '../components/Card'
import { Controls } from '../components/Controls'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllCountries, selectCountriesInfo } from '../store/countries/countries-selectors'
import { useEffect } from 'react'
import { loadCountries } from '../store/countries/countries-actions'

export const HomePage = () => {
	const navigate					= useNavigate(),
		  dispatch					= useDispatch(),
		  countries					= useSelector( selectAllCountries ),
		  { status, error, qty }	= useSelector( selectCountriesInfo )

	useEffect( () => {
		if( ! qty ) dispatch( loadCountries() )
	}, [qty, dispatch] )

	return (
		<>
			<Controls/>

			{ error && <h2>Can't fetch data</h2> }
			{ status === 'loading' && <h2>Loading...</h2> }

			{
				( status === 'received' && qty ) && (
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
				)
			}

		</>
	)
}
