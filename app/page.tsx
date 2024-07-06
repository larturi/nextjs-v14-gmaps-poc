import api from './api'
import App from '@/components/App'
import { Sucursal } from './types/Sucursal'

export default async function Home() {
  const sucursales: Sucursal[] = await api.sucursales.list()
  const provincias: string[] = await api.provincias.list()

  return (
    <>
      <App sucursales={sucursales} provincias={provincias} />
    </>
  )
}
