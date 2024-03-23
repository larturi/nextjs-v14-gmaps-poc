import React, { useContext, useEffect, useState } from 'react'
import useStore from '@/app/context/store'
const API_URL = 'http://localhost:3000/api/sucursales'

function useSucursales() {
  const { sucursales, set } = useStore((state) => ({
    sucursales: state.sucursales,
    set: state.set
  }))
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (sucursales.length === 0) {
      setIsLoading(true)
      fetch(API_URL)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al obtener las sucursales')
          }
          return response.json()
        })
        .then((data) => {
          set((state) => ({
            ...state,
            sucursales: data
          }))
          setIsLoading(false)
        })
        .catch((error) => {
          console.error('Error fetching sucursales:', error)
          setError(error)
          setIsLoading(false)
        })
    }
  }, [sucursales, set])

  return { sucursales, isLoading, error }
}

export default useSucursales
