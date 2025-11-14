import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }

  return (
    <div className='text-center'>

        <p className='text 2xl font-medium test-gray-800'>Inscrivez vous et recever 20% de réduction sur votre 1er achat!</p>
        <p className='text-gray-400 mt-3'>Phrases a completer</p>

        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Votre email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'> S'inscrire</button>
        </form>
      
    </div>
  )
}

export default NewsletterBox
