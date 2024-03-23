'use client'

import useStore from '@/app/context/store'

interface Props {
  provincias: string[]
}

const SelectProvincias: React.FC<Props> = ({ provincias }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const { setProvincia, setLocalidades } = useStore()

  const handleProvinciaChange = async (e: any) => {
    const provincia = e.target.value
    const res = await fetch(`${API_URL}/localidades?provincia=${provincia}`, {
      next: { revalidate: 30 }
    })
    const localidades = await res.json()

    setProvincia(provincia)
    setLocalidades(localidades)
  }

  return (
    <select onChange={handleProvinciaChange}>
      {provincias.map((provincia) => (
        <option key={provincia} value={provincia}>
          {provincia}
        </option>
      ))}
    </select>
  )
}

export default SelectProvincias
