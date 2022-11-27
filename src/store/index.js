import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './root-reducer'
import * as api from '../config'

const persistConfig = {
	key: 'root',
	storage
}

const persistedReducer = persistReducer( persistConfig, rootReducer )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore( persistedReducer, composeEnhancers(
	applyMiddleware( thunk.withExtraArgument( {
		client: axios,
		api
	} ) )
) )
export const persistor = persistStore( store )