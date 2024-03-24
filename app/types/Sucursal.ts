export type Sucursal = {
  id: number
  provincia: string
  localidad: string
  calle: string
  numero: string
  lat_x: number
  long_y: number
  stock: number
  centroLocalidadGeo: {
    lat_x: number
    long_y: number
  }
}
