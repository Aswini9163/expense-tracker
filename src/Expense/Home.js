import React from 'react'
import banner from './Assets/expense-tracker-bg.jpeg'
import coin from './Assets/doller.png'

const Home = () => {
  return (
    <div className='container-fluid p-0'>
      <img src={banner} alt='banner' className='w-100 mainbanner'/>
    </div>
  )
}

export default Home