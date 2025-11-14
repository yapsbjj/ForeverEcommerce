import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <Link to='/'><img src={assets.logo} className='w-36' alt="logo-forever" /></Link> 
                <p className='w-full md:w-2/3 text-gray-600'>
                    texte a completer
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPAGNY</p>

                <ul className='flex flex-col gap-1 text-gray-600'>
                   <Link to='/'><li>Accueil</li></Link>
                    <Link to='/collection'><li>Boutique</li></Link>
                    <Link to='/about'><li>A propos de nous</li></Link>
                    <Link to='/contact'><li>Nous contacter</li></Link>
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
