/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import { useEffect } from 'react'
import useStore from '@/app/context/store'
import GoogleMaps from '../components/GoogleMaps'
import SelectLocalidades from '../components/SelectLocalidades'
import SelectProvincias from '../components/SelectProvincias'
import { Sucursal } from '@/app/types/Sucursal'

interface Props {
  provincias: string[]
  localidades: string[]
  sucursales: Sucursal[]
}

const App: React.FC<Props> = ({ provincias, localidades, sucursales }) => {
  const { setSucursales, setProvincias, setLocalidades } = useStore()

  useEffect(() => {
    setSucursales(sucursales)
    setProvincias(provincias)
    setLocalidades(localidades)
  }, [sucursales, provincias, localidades])
  return (
    <div>
      <div>
        <SelectProvincias provincias={provincias} />
        <SelectLocalidades />
      </div>
      <div>
        <GoogleMaps />
      </div>
    </div>
  )
}

export default App
