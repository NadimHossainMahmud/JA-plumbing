import React from 'react'
import styles from '../styles/footer.module.css'
import { BiSolidNavigation } from "react-icons/bi";
import { IoCall } from "react-icons/io5";

function Footer() {
  return (
    <div className={styles.footerDiv}>
      <div className={styles.getInTouch}>Get in <span className='text-[#D54E45]'>touch?</span></div>

      <div className={styles.formWrapper}>
          <div className={styles.formDiv}>
              {/* <div>
              <label htmlFor="">Name</label><br />
              <input type="text" /> <br />
              <label htmlFor="">Phone Number</label> <br />
              </div>
              <input type="text" /> <br />
              <label htmlFor="">E-mail</label> <br />
              <input type="email" />
              <br />  
              <label htmlFor="">Message</label><br />
              <input type="text" /><br />
              <button type='submit'>Submit</button> */}
          </div>

          <div className={styles.contactDiv}>
              <div className={styles.contactpara}>
                  <p>For any inquiry please contact us at : </p>
                  <div className='flex'>
                  <BiSolidNavigation  className='w-8 h-8'/><p>1635 Pickering Pkwy Unit 9, Pickering, ON L1V 6W8, Canada., Pickering, ON, Canada, Ontario</p>
                  </div>
                  <div className='flex'>
                  <IoCall className='w-8 h-8'/><p>+1 647-703-7407</p>
                  </div>
                  
              </div>
          </div>
      </div>

      <div className={styles.bottomText}>
      <p>Copyright @2024, MyBee Technologies Inc. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
