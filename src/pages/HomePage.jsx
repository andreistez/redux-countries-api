import { useNavigate } from 'react-router-dom'

import { List } from '../components/List'
import { Card } from '../components/Card'
import { Controls } from '../components/Controls'
import { useDispatch, useSelector } from 'react-redux'
import { selectCountriesInfo, selectVisibleCountries } from '../store/countries/countries-selectors'
import { useEffect } from 'react'
import { loadCountries } from '../store/countries/countries-actions'
import { selectControls } from '../store/controls/controls-selectors'

export const HomePage = () => {
	const navigate					= useNavigate(),
		  dispatch					= useDispatch(),
		  { status, error, qty }	= useSelector( selectCountriesInfo ),
		  controls					= useSelector( selectControls ),
		  countries					= useSelector( state => selectVisibleCountries( state, controls ) )

	useEffect( () => {
		if( ! qty ) dispatch( loadCountries() )
	}, [qty, dispatch] )

	return (
		<>
			<Controls/>

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

		</>
	)
}
