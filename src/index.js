import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'

import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './store.js'

ReactDOM.render(
	<React.StrictMode>
        <Provider store={ store }>
			<PersistGate loading={ null } persistor={ persistor }>
				<BrowserRouter>
					<App/>
				</BrowserRouter>
			</PersistGate>
        </Provider>
	</React.StrictMode>,
	document.getElementById( 'root' )
)
