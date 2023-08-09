import React, { useRef, useEffect, useState } from "react";

import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import esriConfig from "@arcgis/core/config";

import { API_KEY } from "../../config";

const DisplayScene = () => {
  const mapRef = useRef(null);
  const [view, setView] = useState<SceneView | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      esriConfig.apiKey = API_KEY;
      const map = new Map({
        basemap: "arcgis-topographic", // Basemap layer service
      });
      const view = new SceneView({
        container: mapRef.current,
        map: map,
        camera: {
          position: {
            x: -118.805,
            y: 34.027,
            z: 2500, // meters
          },
          tilt: 45, // perspective in degrees
        },
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
      <h2>DisplayScene</h2>
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

export default DisplayScene;
