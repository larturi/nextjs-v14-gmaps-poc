'use client'

interface Props {
  localidades: string[]
}

const SelectLocalidades: React.FC<Props> = ({ localidades }) => {
  return (
    <select>
      {localidades.map((localidad) => (
        <option key={localidad} value={localidad}>
          {localidad}
        </option>
      ))}
    </select>
  )
}

export default SelectLocalidades
