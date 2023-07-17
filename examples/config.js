import '../dist/storelocator.css'
import Storelocator from '../dist/storelocator.js'
import GoogleMaps from '../src/js/providers/google-maps/google-maps'

Storelocator.registerProvider('google-maps', GoogleMaps, {
	apiKey: 'api_key',
	libraries: ['places']
})

/* eslint-disable no-unused-vars */
const myStorelocator = new Storelocator({
	options: {
		webServiceUrl: 'https://storelocator-functions.vercel.app',
		debug: true
	},
	provider: 'google-maps',
	onReady: (map) => {
		console.log('onReady', map)
	}
})
