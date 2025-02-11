import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'

import MiniHeader from './MiniHeader'

const PageLayout = () => {
 
  const location = useLocation()


  // Reset scroll and show header on route change
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);


  return (
    <div className="w-full overflow-x-hidden">
        <div className='hidden lg:block'>
            <Header />
        </div>
        <div className='xs:flex lg:hidden' >
          <MiniHeader />
        </div>
        <div className=''>
            <Outlet />
        </div>
        <div className=''>
            <Footer />
        </div>
    </div>
  )
}

export default PageLayout