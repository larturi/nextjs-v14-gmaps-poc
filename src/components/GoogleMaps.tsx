/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import React, { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import useStore from '@/context/store'

const GoogleMaps = () => {
  const mapRef = React.useRef<HTMLDivElement>(null)
  const { sucursalesLocalidad, userCurrentLocation } = useStore()

  const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
    version: 'quartely',
    id: '__googleMapsScriptId'
  })

  useEffect(() => {
    if (sucursalesLocalidad.length === 0) return

    const initializeMap = async () => {
      const { Map } = await loader.importLibrary('maps')
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        'marker'
      )) as google.maps.MarkerLibrary

      // Default: CABA
      let centerOfMap = {
        lat_x: -34.610159,
        long_y: -58.451987
      }

      if (userCurrentLocation) {
        centerOfMap.lat_x = userCurrentLocation.lat
        centerOfMap.long_y = userCurrentLocation.lng
      }

      // Pone en el centro en base a lo definido en la BD como centro de la localidad
      // if (sucursalesLocalidad.length > 0) {
      //   centerOfMap.lat_x = sucursalesLocalidad[0].centroLocalidadGeo.lat_x
      //   centerOfMap.long_y = sucursalesLocalidad[0].centroLocalidadGeo.long_y
      // }

      const locationInMap = {
        lat: centerOfMap.lat_x,
        lng: centerOfMap.long_y
      }

      const options: google.maps.MapOptions = {
        center: locationInMap,
        zoom: 14,
        mapId: 'NEXT_MAPS_TUTS'
      }

      const map = new Map(mapRef.current as HTMLDivElement, options)

      sucursalesLocalidad.map((sucursal) => {
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
  }, [sucursalesLocalidad])

  return <div className='h-screen' ref={mapRef} />
}

export default GoogleMaps
