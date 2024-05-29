import React from 'react'

const Contact = () => {
  return (
    <>
        <h1 className='text-2xl mt-4 drop-shadow-xl text-green-400 text-center font-bold'>Contact us Page !!</h1>
        <form className='flex items-center justify-center'>
          <input 
           type="text"
            className='p-2 m-4 rounded-xl'
             placeholder='First Name'
          /> 
         <input 
           type="text"
            className='p-2 m-4 rounded-xl'
             placeholder='Second Name'
          />
          <button className="bg-orange-300 p-2 rounded-xl hover:bg-green-400">Submit</button>

        </form>
    </>
  )
}

export default Contact