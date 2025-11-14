import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-12 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>échange facile</p>
            <p className='text-gray-400'>un problème de taille? renvoyer le nous gratuitement</p>
        </div>

         <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Pour les retours</p>
            <p className='text-gray-400'>Nous proposons un retour gratuit sous 7 jours</p>
        </div>

         <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Le meilleur service apres vente</p>
            <p className='text-gray-400'>Nous proposons service apres vente 24h sur 24 , 7 jours sur 7 </p>
        </div>
    </div>
  )
}

export default OurPolicy
