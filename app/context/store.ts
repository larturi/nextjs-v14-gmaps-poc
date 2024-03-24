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

  // Provincia Seleccionada
  provinciaSeleccionada: string
  setProvinciaSeleccionada: (provincia: string) => void

  // Localidad Seleccionada
  localidadSeleccionada: string
  setLocalidadSeleccionada: (localidad: string) => void
  localidadesUpdateCounter: number

  // Sucursales de la Localidad Seleccionada
  sucursalesLocalidad: Sucursal[]
  setSucursalesLocalidad: (sucursalesLocalidad: Sucursal[]) => void
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

  // Sucursales de la Localidad Seleccionada
  sucursalesLocalidad: [],
  setSucursalesLocalidad: (localidad) =>
    set((state) => ({
      sucursalesLocalidad: state.sucursales.filter(
        (sucursal) =>
          sucursal.localidad.toLowerCase() ===
          localidad.toString().toLowerCase()
      )
    }))
}))

export default useStore
