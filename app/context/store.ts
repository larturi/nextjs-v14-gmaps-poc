import { create } from 'zustand'
import { sucursales } from '../data/sucursales'

interface Store {
  sucursales: Sucursal[]
  selectedSucursal?: Sucursal | undefined
  getSucursalById: (id: number) => Sucursal | undefined | void
}

const useStore = create<Store>((set) => ({
  sucursales: sucursales,
  selectedSucursal: undefined,
  getSucursalById: (id) => {
    const foundSucursal = sucursales.find((sucursal) => sucursal.id === id)
    set({ selectedSucursal: foundSucursal })
  }
}))

export default useStore
