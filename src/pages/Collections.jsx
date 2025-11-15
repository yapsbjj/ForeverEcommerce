import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'


const Collections = () => {

  const { products } = useContext(ShopContext); 
  const [showFilter,setShowFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* filter option */}
      <div className='min-w-60'>
          <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filtrer
            <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt='' />
          </p>
      {/* Category fliter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>Catégories</p>
             <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Men'} /> Hommes
              </p>

              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Women'} /> Femmes
              </p>

              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Kids'} /> Enfants
              </p>

             </div>

          </div>

          {/*Sub Category Filter */}
          <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>Types</p>
             <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Topwear'} /> Haut du corps
              </p>

              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Bottomwear'} /> Bas du corps
              </p>

              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Winterwear'} /> vetements d'hiver
              </p>

             </div>

          </div>

      </div>
      
    </div>
  )
}

export default Collections
