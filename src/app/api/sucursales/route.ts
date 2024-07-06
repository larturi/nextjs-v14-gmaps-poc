import { sucursales } from '@/data/sucursales'

export async function GET(req: Request) {
  try {
    // Aqui iria el llamado a la BD
    return Response.json(sucursales)
  } catch (error) {
    return Response.json({ error })
  }
}
