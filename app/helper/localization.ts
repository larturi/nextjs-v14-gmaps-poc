import { Ubicacion } from '../types/Sucursal'

export function getCurrentUserLocation(): Promise<Ubicacion> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocalización no soportada por este navegador.'))
    } else {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const userCurrentLocation: Ubicacion = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          resolve(userCurrentLocation)
        },
        () => {
          reject(new Error('No se pudo obtener la ubicación.'))
        }
      )
    }
  })
}

// Calcular la distancia usando la fórmula de Haversine
export function getDistanceFromCurrentLocation(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const R = 6371 // Radio de la tierra en km
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distancia = R * c // Distancia en km
  return distancia
}
