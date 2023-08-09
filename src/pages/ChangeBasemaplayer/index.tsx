import React, { useRef, useEffect, useState } from "react";

import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import esriConfig from "@arcgis/core/config";

import { API_KEY } from "../../config";

const index = () => {
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

      const basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "arcgis-imagery",
      });

      view.ui.add(basemapToggle, "bottom-right");

      const basemapGallery = new BasemapGallery({
        view: view,
        source: {
          query: {
            title: '"World Basemaps for Developers" AND owner:esri',
            tags: "basemap",
            basemapGalleryGroupQuery: 'title:"World Basemaps for Developers"',
          },
        },
      });

      view.ui.add(basemapGallery, "top-right");
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
      <h2>Change Basemap Layer</h2>
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

export default index;
