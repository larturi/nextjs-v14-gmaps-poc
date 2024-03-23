import { Sucursal } from './types/Sucursal'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const api = {
  sucursales: {
    list: async (): Promise<Sucursal[]> => {
      const res = await fetch(`${API_URL}/sucursales`, {
        next: { revalidate: 30 }
      })

      const sucursales = await res.json()

      return sucursales
    }
  },
  provincias: {
    list: async (): Promise<string[]> => {
      const res = await fetch(`${API_URL}/provincias`, {
        next: { revalidate: 30 }
      })

      const provincias = await res.json()
      return provincias
    }
  },
  localidades: {
    list: async (provinciaName: string): Promise<string[]> => {
      const res = await fetch(
        `${API_URL}/localidades?provincia=${provinciaName}`,
        {
          next: { revalidate: 30 }
        }
      )
      const localidades = await res.json()
      return localidades
    }
  }
}

export default api
