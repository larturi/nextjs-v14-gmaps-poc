'use client'

import React, { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

interface Props {
  sucursales: Sucursal[]
}

const GoogleMaps: React.FC<Props> = ({ sucursales }) => {
  const mapRef = React.useRef<HTMLDivElement>(null)
  // const sucursales = useStore((state) => state.sucursales)

  const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
    version: 'quartely',
    id: '__googleMapsScriptId'
  })

  useEffect(() => {
    const initializeMap = async () => {
      const { Map } = await loader.importLibrary('maps')
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        'marker'
      )) as google.maps.MarkerLibrary

      // Centra el mapa en CABA
      const locationInMap = {
        lat: -34.610159,
        lng: -58.451987
      }

      const options: google.maps.MapOptions = {
        center: locationInMap,
        zoom: 12,
        mapId: 'NEXT_MAPS_TUTS'
      }

      const map = new Map(mapRef.current as HTMLDivElement, options)

      sucursales.map((sucursal) => {
        const locationInMap = {
          lat: sucursal.lat_x,
          lng: sucursal.long_y
        }

        const titleMarker = `${sucursal.calle} ${sucursal.numero}`

        const marker = new google.maps.marker.AdvancedMarkerElement({
          map: map,
          position: locationInMap,
          title: titleMarker
        })
      })
    }

    initializeMap()
  }, [sucursales])

  return <div className='h-screen' ref={mapRef} />
}

export default GoogleMaps
