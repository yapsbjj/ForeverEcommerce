import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    texte a completer
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPAGNY</p>

                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Accueil</li>
                    <li>Boutique</li>
                    <li>A propos de nous</li>
                    <li>Nous contacter</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Nous contacter</p>

                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>01 34 32 77 54</li>
                    <li>concact@foreveryou.com</li>

                </ul>
            </div>

        </div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Right Reserved</p>
        <div>

        </div>
      
    </div>
  )
}

export default Footer
