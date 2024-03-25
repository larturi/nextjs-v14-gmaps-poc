'use client'

import useStore from '@/app/context/store'
import { Sucursal } from '../types/Sucursal'
import { distanceForHumans } from '../helper/localization'

interface Props {
  sucursal: Sucursal
}

const SucursalCard: React.FC<Props> = ({ sucursal }) => {
  const { setSucursalSeleccionada, userCurrentLocation } = useStore()

  function handleClickOnCard(e: React.MouseEvent<HTMLDivElement>) {
    let idSucursal = e.currentTarget.getAttribute('data-id')
    if (!idSucursal) idSucursal = '0'

    setSucursalSeleccionada(idSucursal)
  }

  return (
    <div
      onClick={handleClickOnCard}
      data-id={sucursal.id}
      className='max-w-sm rounded overflow-hidden border mb-3 cursor-pointer hover:bg-slate-200 hover:border-gray-500'
    >
      <div className='px-4 py-4'>
        <div className='flex'>
          <div className='font-bold text-md mb-3 w-3/4'>
            {sucursal.razon_social.toUpperCase()}
          </div>
          {userCurrentLocation && (
            <div className='w-1/4 text-right text-sm text-gray-600'>
              {distanceForHumans(sucursal.distance!)}
            </div>
          )}
        </div>
        <div className='font-bold text-sm mb-1'>
          {`${sucursal.calle.toUpperCase()} ${sucursal.numero}`}
        </div>
        <p className='text-gray-700 text-xs'>
          {`${sucursal.localidad.toUpperCase()}, ${sucursal.provincia.toUpperCase()}`}
        </p>
      </div>
      <div className='px-4 pt-1 pb-2'>
        <span className='mr-2'>Chips Disponibles:</span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          {sucursal.stock}
        </span>
      </div>
    </div>
  )
}

export default SucursalCard
