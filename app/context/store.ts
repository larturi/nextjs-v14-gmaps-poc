import { create } from 'zustand'
import { Sucursal } from '../types/Sucursal'

interface Store {
  // Sucursales
  sucursales: Sucursal[]
  setSucursales: (sucursales: Sucursal[]) => void

  // Provincias
  provincias: string[]
  setProvincias: (provincias: string[]) => void

  // Localidades
  localidades: string[]
  setLocalidades: (localidades: string[]) => void

  // Provincia seleccionada
  provinciaSeleccionada: string
  setProvinciaSeleccionada: (provincia: string) => void

  // Localidad seleccionada
  localidadSeleccionada: string
  setLocalidadSeleccionada: (localidad: string) => void
  localidadesUpdateCounter: number

  // Sucursales de la Localidad seleccionada
  sucursalesLocalidad: Sucursal[]
  setSucursalesLocalidad: (sucursalesLocalidad: Sucursal[]) => void

  // Sucursal seleccionada
  sucursalSeleccionada?: Sucursal
  setSucursalSeleccionada: (id: string) => void
}

const useStore = create<Store>((set) => ({
  // Sucursales
  sucursales: [],
  setSucursales: (sucursales) => set({ sucursales }),

  // Provincias
  provincias: [],
  setProvincias: (provincias) => set({ provincias }),

  // Localidades
  localidades: [],
  setLocalidades: (localidades) =>
    set((state) => ({
      localidades,
      localidadesUpdateCounter: state.localidadesUpdateCounter + 1
    })),

  // Provincia seleccionada
  provinciaSeleccionada: '',
  setProvinciaSeleccionada: (provincia) =>
    set({ provinciaSeleccionada: provincia }),

  // Localidad seleccionada
  localidadSeleccionada: '',
  setLocalidadSeleccionada: (localidad) =>
    set({ localidadSeleccionada: localidad }),
  localidadesUpdateCounter: 0,

  // Sucursales de la Localidad seleccionada
  sucursalesLocalidad: [],
  setSucursalesLocalidad: (sucursalesLocalidad) => set({ sucursalesLocalidad }),

  sucursalSeleccionada: undefined,
  setSucursalSeleccionada: (id) =>
    set((state) => {
      const foundSucursal = state.sucursales.find(
        (sucursal) => sucursal.id.toString() === id
      )
      return { sucursalSeleccionada: foundSucursal || undefined }
    })
}))

export default useStore
