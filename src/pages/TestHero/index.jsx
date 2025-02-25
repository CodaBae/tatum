import React from 'react'
import HeroSection from '../../components/HeroSection'

const TestHero = () => {
  return (
    <div className='w-full'>
        <HeroSection 
             bgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png"} 
             bgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1739209666/Slide_2_1_qjbpgq.png"} 
             title={` Personalized <br />
                Banking That 
                <span class="font-bold ">
                  Keeps You Smiling
                </span>`}
             content={"Explore tailored solutions that fit your lifestyle, empower your goals, and make banking a joy."} 
             link={"/personal"} 
             sectionName={"savings"} 
             mainImgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1739379132/happy-african_pw87q1.png"} 
             mainImgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739379132/happy-african_pw87q1.png"} 
             btnText={"Find out more"} 

        />

    </div>
  )
}

export default TestHero