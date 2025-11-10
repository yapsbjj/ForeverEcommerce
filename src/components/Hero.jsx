import React from 'react'
import {assets} from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>

        {/* Left Side banderolle */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            
            <div className='text-[#414141]'>

                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>

                    <p className='font-medium text-sm md:text-base'>Nos Best-Seller</p>

                </div>

                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Les Dernières Nouveautés</h1>

                    <div className='flex items-center gap-2'>

                        <p className='font-semibold text-sm md:test-base'>Acheter Maintenant !</p>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>

                    </div>

            </div>
            
        </div>

        {/* Right Side banderolle */}

        <img className='w-full sm:w-1/2' src={assets.hero_img} alt="image de la banderolle" />
      
    </div>
  )
}

export default Hero
