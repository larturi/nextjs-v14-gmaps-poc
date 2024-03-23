import { sucursales } from '../../data/sucursales'

export async function GET(req: Request) {
  try {
    // Aqui iria el llamado a la BD
    const provincias = new Set(sucursales.map((sucursal) => sucursal.provincia))
    return Response.json(Array.from(provincias).sort())
  } catch (error) {
    return Response.json({ error })
  }
}
