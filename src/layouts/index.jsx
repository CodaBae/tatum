import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'

import MiniHeader from './MiniHeader'

const PageLayout = () => {
 
  const location = useLocation()


  return (
    <div className="w-full">
        <div className='hidden lg:block'>
            <Header />
        </div>
        <div className='xs:flex lg:hidden' >
          <MiniHeader />
        </div>
        <div className=''>
            <Outlet />
        </div>
        <div className='overflow-x-hidden'>
            <Footer />
        </div>
    </div>
  )
}

export default PageLayout