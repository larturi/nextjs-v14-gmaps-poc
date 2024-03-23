import { create } from 'zustand'
import { Sucursal } from '../types/Sucursal'

interface Store {
  // Sucursales
  sucursales: Sucursal[]
  selectedSucursal?: Sucursal
  setSucursales: (sucursales: Sucursal[]) => void

  // Provincias
  provincias: string[]
  selectedProvincia?: string
  setProvincias: (provincias: string[]) => void
  setProvincia: (provincia: string) => void

  // Localidades
  localidades: string[]
  selectedLocalidad?: string
  setLocalidades: (localidades: string[]) => void
  setLocalidad: (localidad: string) => void
}

const useStore = create<Store>((set) => ({
  // Sucursales
  sucursales: [],
  selectedSucursal: undefined,
  setSucursales: (sucursales) => set({ sucursales }),

  // Provincias
  provincias: [],
  selectedProvincia: undefined,
  setProvincias: (provincias) => set({ provincias }),
  setProvincia: (selectedProvincia) => set({ selectedProvincia }),

  // Localidades
  localidades: [],
  selectedLocalidad: undefined,
  setLocalidades: (localidades) => set({ localidades }),
  setLocalidad: (selectedLocalidad) => set({ selectedLocalidad })
}))

export default useStore
