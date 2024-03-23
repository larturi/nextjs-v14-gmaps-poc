'use client'

import useStore from '@/app/context/store'

const SelectLocalidades = () => {
  const { localidades, sucursales, setSucursales } = useStore()

  const handleLocalidadChange = async (e: any) => {
    const localidad = e.target.value

    const sucursalesUpdated = sucursales.filter(
      (sucursal) => sucursal.localidad.toUpperCase() === localidad.toUpperCase()
    )

    setSucursales(sucursalesUpdated)
  }

  return (
    <select onChange={handleLocalidadChange}>
      {localidades.map((localidad) => (
        <option key={localidad} value={localidad}>
          {localidad}
        </option>
      ))}
    </select>
  )
}

export default SelectLocalidades
