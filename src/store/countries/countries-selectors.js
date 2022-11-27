export const selectCountriesInfo = ( { countries } ) => ( {
	status	: countries.status,
	error	: countries.error,
	qty		: countries.list.length
} )

export const selectAllCountries = state => state.countries.list