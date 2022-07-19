import svgRoute from '../../svg/route.svg'
import { createElement } from 'jsx-dom'

/**
 * storelocatorjs info window template
 * @module storelocatorjs/templateInfoIndow
 */
export default function ({ store, origin }) {
	return (
		<div className="storelocator-infoWindow">
			{store.picture && (
				<span className="storelocator-pictureStore">
					<img src={store.picture} alt={store.title} />
				</span>
			)}
			<div className="storelocator-detailStore">
				{store.title && (
					<span className="storelocator-detailStoreTitle">
						{store.index + 1}. {store.title}
					</span>
				)}
				<a
					href={`http://www.google.fr/maps/dir/${origin}/${store.lat},${store.lng}`}
					title="See the itinerary on Google Maps"
					target="_blank"
					className="storelocator-detailStoreDistance"
				>
					<span>{store.distance.toFixed(2)}km</span>
					<div innerHTML={svgRoute}></div>
				</a>
				{store.address && (
					<span className="storelocator-detailStoreAddress">{store.address}</span>
				)}
				$
				{store.zipcode && (
					<span className="storelocator-detailStoreZipcode">{store.zipcode}</span>
				)}
				{store.city && <span className="storelocator-detailStoreCity">{store.city}</span>}
				{store.phone && (
					<span className="storelocator-detailStorePhone">
						<a href={`tel:${store.phone}`} title="Call">
							{store.phone}
						</a>
					</span>
				)}
				{typeof store.link !== 'undefined' && (
					<a
						href={store.link}
						title="Visit website"
						target="_blank"
						className="storelocator-detailStoreUrl"
					>
						{store.link}
					</a>
				)}
			</div>
		</div>
	)
}
