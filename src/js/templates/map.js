export default function TemplateMap() {
	return (
		<div class="storelocator">
			<div class="storelocator-loader">
				<div class="storelocator-loaderBar"></div>
				<div class="storelocator-loaderBar"></div>
				<div class="storelocator-loaderBar"></div>
			</div>
			<div class="storelocator-sidebar">
				<nav class="storelocator-nav">
					<ul class="storelocator-navList">
						<li class="storelocator-navListItem active">
							<button
								class="storelocator-navButton"
								data-switch-view
								data-target="map"
							>
								Map
							</button>
						</li>
						<li class="storelocator-navListItem">
							<button
								class="storelocator-navButton"
								data-switch-view
								data-target="list"
							>
								List
							</button>
						</li>
					</ul>
				</nav>
				<div class="storelocator-sidebarResults"></div>
			</div>
			<div class="storelocator-map active">
				<div id="storelocator-mapCanvas"></div>
				<button class="storelocator-geolocButton">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M176 256c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80zM256 0c17.7 0 32 14.33 32 32v34.65C368.4 80.14 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32h-34.7c-13.4 80.4-76.9 143.9-157.3 157.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-34.7C143.6 431.9 80.14 368.4 66.65 288H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h34.65C80.14 143.6 143.6 80.14 224 66.65V32c0-17.67 14.3-32 32-32zM128 256c0 70.7 57.3 128 128 128s128-57.3 128-128-57.3-128-128-128-128 57.3-128 128z" />
					</svg>
				</button>
			</div>
		</div>
	)
}
