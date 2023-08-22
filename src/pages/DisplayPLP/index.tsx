import React, {useRef, useState,useEffect} from 'react'

import Map from '@arcgis/core/Map'
import esriConfig from '@arcgis/core/config'
import MapView from '@arcgis/core/views/MapView'
import Graphic from '@arcgis/core/Graphic'
import GraphicLayer from '@arcgis/core/layers/GraphicsLayer.js'

import { API_KEY } from '../../config'

const DisplayPLP = () => {
  const mapRef = useRef(null)
  const [view, setView] = useState<MapView | null>(null)

  useEffect(() => {
    if (mapRef.current) {
      esriConfig.apiKey = API_KEY
      const map = new Map({
        basemap: 'arcgis-topographic', // Basemap layer service
      })
      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [-118.805, 34.027], // Longitude, latitude
        zoom: 13, // Zoom level
      })

      const graphicsLayer = new GraphicLayer()
      map.add(graphicsLayer)

      const point = {
        type: 'point',
        longitude: -118.80657463861,
        latitude: 34.0005930608889,
      }
      const simpleMarkerSymbol = {
        type: 'simple-marker',
        color: [226, 119, 40], // orange
        outline: {
          color: [255, 255, 255], // white
          width: 1,
        },
      }

      const pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol,
      })

      graphicsLayer.add(pointGraphic)

      const polyline = {
        type: 'polyline',
        paths: [
          [-118.821527826096, 34.0139576938573],
          [-118.814893761649, 34.0080602407843],
          [-118.808878330345, 34.0016642996246]
        ]
      }
      const simpleLineSymbol = {
        type: 'simple-line',
        color: [226, 119, 40], // orange
        width: 2,
      }

      const polylineGraphic = new Graphic({
        geometry: polyline,
        symbol: simpleLineSymbol,
      })

      graphicsLayer.add(polylineGraphic)

      const polygon = {
        type: 'polygon',
        rings: [
          [-118.818984489994, 34.0137559967283],
          [-118.806796597377, 34.0215816298725],
          [-118.791432890735, 34.0163883241613],
          [-118.79596686535, 34.008564864635],
          [-118.808558110679, 34.0033713638363]
        ]
      }
      const simpleFillSymbol = {
        type: 'simple-fill',
        color: [227, 139, 79, 0.8], // orange, opacity 80%
        outline: {
          color: [255, 255, 255],
          width: 1,
        },
      }

      const polygonGraphic = new Graphic({
        geometry: polygon,
        symbol: simpleFillSymbol,
      })

      graphicsLayer.add(polygonGraphic)
    }
    return () => {
      if (view) {
        view.destroy()
      }
    }
  }, [])

  return (
    <div>
      <h2>DisplayPLP</h2>
      <div
        className="webmap"
        ref={mapRef}
        style={{
          width: '500px',
          height: '500px',
        }}
      ></div>
    </div>
  )
}

export default DisplayPLP