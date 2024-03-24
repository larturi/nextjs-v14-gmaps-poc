/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import { useEffect } from 'react'
import useStore from '@/app/context/store'
import GoogleMaps from '../components/GoogleMaps'
import SelectLocalidades from '../components/SelectLocalidades'
import SelectProvincias from '../components/SelectProvincias'
import { Sucursal } from '@/app/types/Sucursal'
import SucursalList from './SucursalList'

interface Props {
  provincias: string[]
  sucursales: Sucursal[]
}

const App: React.FC<Props> = ({ provincias, sucursales }) => {
  const { setSucursales, setProvincias } = useStore()

  useEffect(() => {
    setSucursales(sucursales)
    setProvincias(provincias)
  }, [sucursales, provincias])
  return (
    <div className='flex flex-row'>
      <div className='w-3/12 bg-gray-100 p-4'>
        <SelectProvincias provincias={provincias} />
        <SelectLocalidades />
        <SucursalList />
      </div>
      <div className='w-9/12 bg-[#e5e3de]'>
        <GoogleMaps />
      </div>
    </div>
  )
}

export default App
