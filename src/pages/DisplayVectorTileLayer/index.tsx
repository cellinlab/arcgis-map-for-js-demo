import React, {useRef, useEffect, useState} from 'react'

import Map from "@arcgis/core/Map";
import MapView from '@arcgis/core/views/MapView';
import esriConfig from '@arcgis/core/config';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';

import { API_KEY } from '../../config';

const index = () => {
  const mapRef = useRef(null);
  const [view, setView] = useState<MapView | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      esriConfig.apiKey = API_KEY;

      const url = 'https://www.arcgis.com/sharing/rest/content/items/4cf7e1fb9f254dcda9c8fbadb15cf0f8/resources/styles/root.json'
      const vectorTileLayer = new VectorTileLayer({
        url: url
      });

      const map = new Map({
        basemap: "arcgis-light-gray",
        layers: [vectorTileLayer]
      });

      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [-118.805, 34.027], // Longitude, latitude
        zoom: 13, // Zoom level
      });

      setView(view);
    }

    return () => {
      if (view) {
        view.destroy();
      }
    };
  }, []);
  
  return (
    <div>
      <h2>
        VectorTileLayer
      </h2>
      <div
        className="webmap"
        ref={mapRef}
        style={{
          width: '500px',
          height: '500px'
        }}
      ></div>
    </div>
  )
}

export default index