'use client'

import useStore from '@/app/context/store'
import { getCurrentUserLocation, getDistanceFromCurrentLocation } from '@/app/helper/localization'
import { Sucursal } from '@/app/types/Sucursal'

const SelectLocalidades = () => {
  const {
    localidades,
    sucursales,
    localidadesUpdateCounter,
    setLocalidadSeleccionada,
    setSucursalesLocalidad,
    setUserCurrentLocation
  } = useStore()

  const handleLocalidadChange = async (e: any) => {
    const localidad = e.target.value
    setLocalidadSeleccionada(localidad)

    let sucursalesFiltered = sucursales.filter(
      (sucursal) => sucursal.localidad.toUpperCase() === localidad.toUpperCase()
    )

    // Ordena las sucursales filtradas en base a la ubicacion actual
    try {
      const userCurrentLocation = await getCurrentUserLocation()
      sucursalesFiltered = sucursalesFiltered.map((sucursal: Sucursal) => ({
        ...sucursal,
        distance: getDistanceFromCurrentLocation(
          userCurrentLocation.lat,
          userCurrentLocation.lng,
          sucursal.lat_x,
          sucursal.long_y
        )
      }))

      setUserCurrentLocation(userCurrentLocation)

      sucursalesFiltered.sort((a: Sucursal, b: Sucursal) => {
        const distanceA = a.distance === undefined ? Infinity : a.distance
        const distanceB = b.distance === undefined ? Infinity : b.distance

        return distanceA - distanceB
      })
    } catch (error) {
      console.error(error)
      setSucursalesLocalidad(sucursalesFiltered)
    }

    setSucursalesLocalidad(sucursalesFiltered)
  }

  return (
    <div className='relative inline-block w-full mb-4'>
      <select
        key={localidadesUpdateCounter}
        onChange={handleLocalidadChange}
        defaultValue=''
        className='block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline mb-3'
      >
        <option value='' disabled>
          Localidad
        </option>

        {localidades.map((localidad) => (
          <option key={localidad} value={localidad}>
            {localidad}
          </option>
        ))}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
        <svg
          className='fill-current h-4 w-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
        </svg>
      </div>
    </div>
  )
}

export default SelectLocalidades
