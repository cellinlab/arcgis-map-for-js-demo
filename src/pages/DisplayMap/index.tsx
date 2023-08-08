import React, { useRef, useEffect, useState } from "react";

import Map from "@arcgis/core/Map";
import esriConfig from "@arcgis/core/config";
import MapView from "@arcgis/core/views/MapView";

import { API_KEY } from "../../config";

const DisplayMap = () => {
  const mapRef = useRef(null);
  const [view, setView] = useState<MapView | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      esriConfig.apiKey = API_KEY;
      const map = new Map({
        basemap: "arcgis-topographic", // Basemap layer service
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
        // destroy the map view
        view.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h2>Display Map</h2>
      <div
        className="webmap"
        ref={mapRef}
        style={{
          width: "500px",
          height: "500px",
        }}
      ></div>
    </div>
  );
};

export default DisplayMap;
