export const selectCountriesInfo = ( { countries } ) => ( {
	status	: countries.status,
	error	: countries.error,
	qty		: countries.list.length
} )

export const selectAllCountries = state => state.countries.list

export const selectVisibleCountries = ( state, { search = '', region = '' } ) => {
	if( ! search && ! region ) return state.countries.list

	return state.countries.list.filter(
		country => (
			country.name.toLowerCase().includes( search.toLowerCase() ) &&
			country.region.toLowerCase().includes( region.toLowerCase() )
		)
	)
}