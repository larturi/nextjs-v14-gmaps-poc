'use client'

import useStore from '@/app/context/store'

const SelectLocalidades = () => {
  const {
    localidades,
    sucursales,
    localidadesUpdateCounter,
    setLocalidadSeleccionada,
    setSucursalesLocalidad,
    sucursalesLocalidad
  } = useStore()

  const handleLocalidadChange = async (e: any) => {
    const localidad = e.target.value
    setLocalidadSeleccionada(localidad)

    const sucursalesFiltered = sucursales.filter(
      (sucursal) => sucursal.localidad === localidad
    )

    setSucursalesLocalidad(sucursalesFiltered)

    const sucursalesUpdated = sucursales.filter(
      (sucursal) => sucursal.localidad.toUpperCase() === localidad.toUpperCase()
    )

    setSucursalesLocalidad(localidad)
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
