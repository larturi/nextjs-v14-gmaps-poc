'use client'

import { Sucursal } from '../types/Sucursal'

interface Props {
  sucursal: Sucursal
}

const SucursalCard: React.FC<Props> = ({ sucursal }) => {
  return (
    <div>
      <div className='max-w-sm rounded overflow-hidden border mb-3'>
        <div className='px-6 py-4'>
          <div className='font-bold text-md mb-2'>{`${sucursal.calle} ${sucursal.numero}`}</div>
          <p className='text-gray-700 text-base'>
            {`${sucursal.localidad}, ${sucursal.provincia}`}
          </p>
        </div>
        <div className='px-6 pt-1 pb-2'>
          <span className='mr-2'>Chips Disponibles:</span>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            {sucursal.stock}
          </span>
        </div>
      </div>
    </div>
  )
}

export default SucursalCard
