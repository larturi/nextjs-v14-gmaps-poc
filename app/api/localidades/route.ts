import { sucursales } from '../../data/sucursales'

export async function GET(req: Request) {
  try {
    // Ejemplo: /api/localidades?provincia=Buenos Aires
    const url = new URL(req.url)
    const provinciaQuery = url.searchParams.get('provincia')

    if (!provinciaQuery) {
      return new Response(
        JSON.stringify({ error: 'Provincia no especificada' }),
        { status: 400 }
      )
    }

    const localidades = new Set(
      sucursales
        .filter(
          (sucursal) =>
            sucursal.provincia.toLowerCase() === provinciaQuery.toLowerCase()
        )
        .map((sucursal) => sucursal.localidad)
    )

    return new Response(JSON.stringify(Array.from(localidades).sort()), {
      status: 200
    })
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 })
  }
}
