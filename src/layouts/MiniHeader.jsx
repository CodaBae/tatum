import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


import MobileNavBar from './MobileNavBar'




const MiniHeader = () => {

  const [open, setOpen] = useState(false)


  const navigate = useNavigate()
 

  return (
    <div className='w-full fixed z-10'>
        {/* <div className='w-[100%] h-[58px] bg-[#090540] py-[16px] px-[20px] flex justify-between items-center'>
            <img src={Logo} alt='logo' className='h-[32px]' onClick={() => navigate("/")}/>
            <div className='flex items-center gap-2 ' onClick={() => setOpen(true)}>
              <img src={Menu} alt='menu' className='h-[32px]' />
            </div>
     
        </div> */}
        {open && <MobileNavBar handleClose={() => setOpen(false)} /> }
    </div>
  )
}

export default MiniHeader