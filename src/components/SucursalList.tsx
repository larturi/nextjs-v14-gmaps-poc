'use client'

import useStore from '@/context/store'
import SucursalCard from './SucursalCard'

const SucursalList = () => {
  const { sucursalesLocalidad } = useStore()

  return (
    <div>
      {sucursalesLocalidad.map((sucursal) => (
        <SucursalCard key={sucursal.id} sucursal={sucursal} />
      ))}
    </div>
  )
}

export default SucursalList
