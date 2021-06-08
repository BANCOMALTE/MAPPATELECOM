        //Creazione del pulsante per eliminare il marker di ricerca
        let btn = document.createElement('button');
        btn.innerText = 'Delete Marker';
        btn.onclick =  function() {
          map.removeLayer(results);
        }
        var options = {
            maxZoom: 20,
        };
//Creazione della mappa
        var map = L.map('map', options).setView([40.817725,14.459381], 10);

        var latCenter = 0, lonCenter = 0;

        //Attivo hash per l'url dinamico

        //var hash = new L.Hash(map);

        //Dichiarazione ed impostazioni dei layer

        /*var googleRoadmapLayer = L.gridLayer.googleMutant({
        type: 'roadmap' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
        }).addTo(map);

        var googleSatLayer = L.gridLayer.googleMutant({
        type: 'satellite'
        });

        var googleTerrainLayer = L.gridLayer.googleMutant({
        type: 'terrain'
        });

        var googleHybridLayer = L.gridLayer.googleMutant({
        type: 'hybrid'
        });*/

        var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

        //var BING_KEY = 'Atn6C14s3vQonUfO1yaYPQMd6dzZMIcqvUT8Fc6QBDVsMGj1SXFOPKOc-bCozIXB';

        /*var bingStandardConfig = {
            bingMapsKey: BING_KEY,
            imagerySet: 'Road'
        };

        var bingSatConfig = {
            bingMapsKey: BING_KEY,
            imagerySet: 'Aerial'
        };

        var bingHybridConfig = {
            bingMapsKey: BING_KEY,
            imagerySet: 'AerialWithLabels'
        };

        var bingStandard = L.tileLayer.bing(bingStandardConfig);

        var bingSat = L.tileLayer.bing(bingSatConfig);

        var bingHybrid = L.tileLayer.bing(bingHybridConfig);

        

        var nokiaHereStandard = L.tileLayer('https://{s}.{base}.maps.api.here.com/maptile/2.1/{type}/{mapID}/{scheme}/{z}/{x}/{y}/{size}/{format}?app_id={app_id}&app_code={app_code}&lg={language}', {
            attribution: 'Map &copy; 2016 <a href="http://developer.here.com">HERE</a>',
            subdomains: '1234',
            base: 'base',
            type: 'maptile',
            scheme: 'normal.day',
            app_id: 'gk0bWnLl0jUZ9xQ2nUhk',
            app_code: 'BONnIJvMUB4wpO57mfjD3g',
            mapID: 'newest',
            maxZoom: 20,
            language: 'ita',
            format: 'png8',
            size: '256'
        });

        var nokiaHereSat = L.tileLayer('https://{s}.{base}.maps.api.here.com/maptile/2.1/{type}/{mapID}/{scheme}/{z}/{x}/{y}/{size}/{format}?app_id={app_id}&app_code={app_code}&lg={language}', {
            attribution: 'Map &copy; 2016 <a href="http://developer.here.com">HERE</a>',
            subdomains: '1234',
            base: 'aerial',
            type: 'maptile',
            scheme: 'satellite.day',
            app_id: 'gk0bWnLl0jUZ9xQ2nUhk',
            app_code: 'BONnIJvMUB4wpO57mfjD3g',
            mapID: 'newest',
            maxZoom: 20,
            language: 'ita',
            format: 'png8',
            size: '256'
        });

        var nokiaHereHybrid = L.tileLayer('https://{s}.{base}.maps.api.here.com/maptile/2.1/{type}/{mapID}/{scheme}/{z}/{x}/{y}/{size}/{format}?app_id={app_id}&app_code={app_code}&lg={language}', {
            attribution: 'Map &copy; 2016 <a href="http://developer.here.com">HERE</a>',
            subdomains: '1234',
            base: 'aerial',
            type: 'maptile',
            scheme: 'hybrid.day',
            app_id: 'gk0bWnLl0jUZ9xQ2nUhk',
            app_code: 'BONnIJvMUB4wpO57mfjD3g',
            mapID: 'newest',
            maxZoom: 20,
            language: 'ita',
            format: 'png8',
            size: '256'
        });

        var nokiaHereTerrain = L.tileLayer('https://{s}.{base}.maps.api.here.com/maptile/2.1/{type}/{mapID}/{scheme}/{z}/{x}/{y}/{size}/{format}?app_id={app_id}&app_code={app_code}&lg={language}', {
            attribution: 'Map &copy; 2016 <a href="http://developer.here.com">HERE</a>',
            subdomains: '1234',
            base: 'aerial',
            type: 'maptile',
            scheme: 'terrain.day',
            app_id: 'gk0bWnLl0jUZ9xQ2nUhk',
            app_code: 'BONnIJvMUB4wpO57mfjD3g',
            mapID: 'newest',
            maxZoom: 20,
            language: 'ita',
            format: 'png8',
            size: '256'
        });

        */

       

        var mapboxSat = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â© <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 22,
        id: 'mapbox.satellite',
        accessToken: 'pk.eyJ1IjoibHVjYW1vbnRlIiwiYSI6ImNqNXB4MXNidjBnYjAzMm16N29rdGxrMnIifQ.8zwVqjKQSEjRlQL5ufU0bA'
        });

        //Aggiungo i layer al menu

        var baseLayers = {
			/*"Google Standard": googleRoadmapLayer,
            "Google Satellite": googleSatLayer,
            "Google Ibrida": googleHybridLayer,
            "Google Rilievo": googleTerrainLayer,*/
            "Open Street Map": osm,
            /*"Bing Standard": bingStandard,
            "Bing Satellite": bingSat,
            "Bing Ibrida": bingHybrid,
            "HERE Standard": nokiaHereStandard,
            "HERE Satellite": nokiaHereSat,
            "HERE Ibrida": nokiaHereHybrid,
            "HERE Rilievo": nokiaHereTerrain,*/
            
            "Mapbox Satellite": mapboxSat,
		};

        //Aggiungo il menu per la selezione della basemap alla mappa

		L.control.layers(baseLayers).addTo(map);
        ///Aggiungo il layer del gps in basso a destra
        L.control.locate({
            position: "bottomright"
        }).addTo(map);

        var markerClusters = L.markerClusterGroup({disableClusteringAtZoom: 16}); //Disabilito il clustering quando lo zoom Ã¨ al livello 16

        //Ciclo for per la creazione dei cluster

        for ( var i = 0; i < centrali.length; ++i )
        {

        //Creazione del popup dei marker
			
		var exchangeType = "CENTRALE";
		var clli = centrali[i].codiceSedeClli;
			
		if (clli.length > 8) {
			exchangeType = "MUX";
		} 
			
        var popup = "<center><b><span>" + exchangeType + 
				"</b></span><br><br><span><b>Codice CLLI:</b> " + 
				centrali[i].codiceSedeClli + "</span><br>" +
                '<span><b>Codice ACL:</b> ' + centrali[i].codiceAclAreaCentrale + "</span><br>" +
                '<span><b>Latitudine:</b> ' + centrali[i].latitudine + "</span><br>" +
                '<span><b>Longitudine:</b> ' + centrali[i].longitudine + "</span><br><br>" +
                '<span><a href="https://www.google.com/maps/place/' + centrali[i].latitudine + "," + centrali[i].longitudine + '/@' + centrali[i].latitudine + "," + centrali[i].longitudine + ',16z"><b>Visualizza su Google Maps</b></a></span></center>';

        var m = L.marker([centrali[i].latitudine, centrali[i].longitudine]).bindPopup(popup);

        markerClusters.addLayer(m); //Aggiungo il layer della mappa a quello dei cluster

        map.addLayer(markerClusters); //Aggiungo il layer dei cluster alla mappa
            
        }

    

        /*Debug Info

        var startCoord = map.getCenter();

        var startZoomLev = map.getZoom();

        console.log("Info Debug: \n\n" + "Latitudine: " + startCoord.lat + "\nLongitudine: " + startCoord.lng + "\nLivello di zoom: " + startZoomLev + "\nNumero markers: " + markers.length /* + "\nApertura sidebar: " + nav );

        map.on('zoomend', function() {

        var coord = map.getCenter();

        var zoomLev = map.getZoom();

        console.log("Info Debug: \n\n" + "Latitudine: " + coord.lat + "\nLongitudine: " + coord.lng + "\nLivello di zoom: " + zoomLev + "\nNumero markers: " + markers.length /* + "\nApertura sidebar: " + nav );

        }); */

        //Chiusura della sidenav quando si muove la mappa o si modifica lo zoom

        //map.on('moveend', function() { closeNav(); });

        //Funzioni che acquisiscono e gestiscono la posizione GPS del client

        function getClientLocation() {
            this.map.locate({setView: true, maxZoom: 16});
        }

        /* Ricerca indirizzo */
       
//Qui definisco l'icona del marker di ricerca
	    
var searchicon = L.icon({
    iconUrl: 'me.png',
    

    iconSize:     [38, 38], // size of the icon
    
  
});
//Qui definisco e setto la ricerca per indirizzo e la localizzazione dell'utente mediante il gps
var searchControl = new L.esri.Controls.Geosearch().addTo(map);

            var results = new L.LayerGroup().addTo(map);

              searchControl.on('results', function(data){
                results.clearLayers();
                for (var i = data.results.length - 1; i >= 0; i--) {
                  results.addLayer(L.marker(data.results[i].latlng ,  {icon: searchicon}).bindPopup(btn, {
  maxWidth: 'auto'
})),map.addLayer(results);
                }
              });
              map.addControl(new L.Control.Permalink({ useLocation: true, text: null }));