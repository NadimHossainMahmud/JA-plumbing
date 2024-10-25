import React from 'react'
import styles from '/styles/emergency.module.css'
import { VscTools } from "react-icons/vsc";
import FaqBox from './SubComponents/FaqBox';



function Faq() {
  return (
    <>
    <div className='w-full h-screen bg-gradient-to-b from-[#fff] to-[#C1CFE7] pt-[100px]'>  
        <div className={styles.upperDiv}>
            <div className={styles.emrgencyIcon}>
              <h1><VscTools  className={styles.settingIcon}/></h1>
            </div>


            <div className={styles.headingText}>
              <h1>Frequently Asked <span className='text-[#D54E45]'> Questions</span> </h1>
              <p>  Need a reliable plumber at any hour?</p>
            </div>
        </div>

        <div className={styles.faqboxx}>
          <FaqBox/>
          <FaqBox/>
          <FaqBox/>
          <FaqBox/>
        </div>
        
    </div>
    </>
    
  )
}

export default Faq
