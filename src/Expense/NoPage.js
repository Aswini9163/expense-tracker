import React from 'react'
import Nopage from './Assets/nopage.png'

const NoPage = () => {
  return (
    <div className='container-fluid p-0'>
      <h2 className='m-2'>No Page Found</h2>
      <img src={Nopage} alt='No Page' className='banner mb-3' />
      
    </div>
  )
}

export default NoPage