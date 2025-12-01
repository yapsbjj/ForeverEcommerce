import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'A PROPOS'} text2={'DE NOUS'} />
        </div>
          <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis voluptatem quasi reiciendis quis eligendi tenetur eos quaerat atque accusantium ipsum eveniet doloribus possimus quia repellat, aut odit, impedit eaque dicta!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorem voluptatum repellendus sequi cupiditate optio pariatur qui corrupti explicabo. Quidem nesciunt vero similique optio laudantium esse repudiandae fuga sequi officiis!</p>
                    <b className='text-gray-800'>Notre mission</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatum repellat nostrum autem, modi sint voluptates ad quidem, iure omnis deserunt, fugiat cumque praesentium voluptatem at nihil? Minus, eum at?</p>
                </div>
          </div>

          <div className='text-xl py-4'>
            <Title text1={'Pourquoi'} text2={'Nous Choisir'} />
          </div>

          <div className=' flex flex-col md:flex-row text-sm mb-20 '>
              <div className='border px-10 md:px-16 py-20 flex flex-col gap-5 '>
                  <p>Contrôle de la qualité : </p>
                  <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates exercitationem, voluptatem doloribus dolor, vitae quia adipisci sit itaque explicabo iste assumenda quidem eius. Quas officia porro, vero nostrum optio id!</p>
              </div>
              <div className='border px-10 md:px-16 py-20 flex flex-col gap-5 '>
                  <p> Le Confort : </p>
                  <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates exercitationem, voluptatem doloribus dolor, vitae quia adipisci sit itaque explicabo iste assumenda quidem eius. Quas officia porro, vero nostrum optio id!</p>
              </div>
              <div className='border px-10 md:px-16 py-20 flex flex-col gap-5 '>
                  <p>Service apres vente élu meilleur de l'année : </p>
                  <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates exercitationem, voluptatem doloribus dolor, vitae quia adipisci sit itaque explicabo iste assumenda quidem eius. Quas officia porro, vero nostrum optio id!</p>
              </div>
          </div>

          <NewsletterBox/>

      </div>
      
    
  )
}

export default About
