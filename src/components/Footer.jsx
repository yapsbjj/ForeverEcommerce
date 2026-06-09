import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Pour un défilement fluide
    })
  }

  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <Link to='/' onClick={scrollToTop}>
                  <img src={assets.logo} className='w-36' alt="logo-forever" />
                </Link> 
                <p className='w-full md:w-2/3 text-gray-600'>
                    texte a completer
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPAGNY</p>

                <ul className='flex flex-col gap-1 text-gray-600'>
                   <Link to='/' onClick={scrollToTop}><li>Accueil</li></Link>
                    <Link to='/collection' onClick={scrollToTop}><li>Boutique</li></Link>
                    <Link to='/about' onClick={scrollToTop}><li>A propos de nous</li></Link>
                    <Link to='/contact' onClick={scrollToTop}><li>Nous contacter</li></Link>
                    <Link to='/contact' onClick={scrollToTop}><li>RGPD</li></Link>
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