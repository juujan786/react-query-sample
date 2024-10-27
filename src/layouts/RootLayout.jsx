import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div className='mx-auto w-[96%] md:w-[94%] lg:w-[90%]'>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default RootLayout