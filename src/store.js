import axios from 'axios'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants'

import themeReducer from './features/theme/themeSlice'
import controlsReducer from './features/controls/controlsSlice'
import countriesReducer from './features/countries/countriesSlice'

import * as api from './config'

const persistConfig = {
	key: 'root',
	storage
}

const reducers = combineReducers( {
	theme		: themeReducer,
	controls	: controlsReducer,
	countries	: countriesReducer
} )

const _persistedReducer = persistReducer( persistConfig, reducers )

export const store = configureStore( {
	reducer: _persistedReducer,
	devTools: true,
	middleware: getDefaultMiddleware => getDefaultMiddleware( {
		thunk: {
			extraArgument: {
				client: axios,
				api
			}
		},
		serializableCheck: {
			ignoredActions: [
				FLUSH,
				REHYDRATE,
				PAUSE,
				PERSIST,
				PURGE,
				REGISTER
			]
		}
	} )
} )

export const persistor = persistStore( store )