import React, { useRef, useEffect, useState } from 'react'

import Map from '@arcgis/core/Map'
import esriConfig from '@arcgis/core/config'
import MapView from '@arcgis/core/views/MapView'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'

import { API_KEY } from '../../config'

const DisplayFeatureLayer = () => {
  const mapRef = useRef(null)
  const [view, setView] = useState<MapView | null>(null)

  useEffect(() => {
    if (mapRef.current) {
      esriConfig.apiKey = API_KEY
      const map = new Map({
        basemap: 'arcgis-topographic',
      })

      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [-118.805, 34.027],
        zoom: 13,
      })

      const trailheadLayer = new FeatureLayer({
        url: "https://services5.arcgis.com/rHpuaaEVid8J0DcE/arcgis/rest/services/trailheads/FeatureServer/0"
      })

      map.add(trailheadLayer)

      const trailsLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0"
      })

      map.add(trailsLayer, 0)

      const parksLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0"
      })

      map.add(parksLayer, 0)
    }

    return () => {
      if (view) {
        view.destroy()
      }
    }
  }, [])

  return (
    <div>
      <h2>Display Feature Layer</h2>
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

export default DisplayFeatureLayer