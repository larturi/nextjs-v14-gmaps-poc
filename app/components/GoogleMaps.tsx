'use client'

import React, { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import useStore from '@/app/context/store'

export default function GoogleMaps() {
  const mapRef = React.useRef<HTMLDivElement>(null)

  const sucursales = useStore((state) => state.sucursales)

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'quartely'
      })

      const { Map } = await loader.importLibrary('maps')

      // Centra el mapa en CABA
      const locationInMap = {
        lat: -34.610159,
        lng: -58.451987
      }

      const { Marker } = (await loader.importLibrary(
        'marker'
      )) as google.maps.MarkerLibrary

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

        const marker = new Marker({
          map: map,
          position: locationInMap
        })
      })
    }

    initializeMap()
  }, [sucursales])

  return <div className='h-screen' ref={mapRef} />
}
