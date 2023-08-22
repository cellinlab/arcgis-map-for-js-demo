import React, {useRef, useEffect, useState} from 'react'

import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import ImageryLayer from '@arcgis/core/layers/ImageryLayer'
import esriConfig from '@arcgis/core/config'

import { API_KEY } from '../../config'

const DisplayImageryLayer = () => {
  const mapRef = useRef(null)
  const [view, setView] = useState<MapView | null>(null)

  useEffect(() => {
    if (mapRef.current) {
      const map = new Map({
        basemap: 'gray-vector',
      })

      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [-100, 40],
        zoom: 4,
      })

      const imgLayer = new ImageryLayer({
        url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/NLCDLandCover2001/ImageServer',
        format: 'jpgpng',
      })

      map.add(imgLayer)
    }
    return () => {
      if (view) {
        view.destroy()
      }
    }
  }, [])

  return (
    <div>
      <h2>Display ImageryLayer</h2>
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

export default DisplayImageryLayer