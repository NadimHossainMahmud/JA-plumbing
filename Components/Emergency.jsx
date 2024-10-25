import React from 'react'
import styles from '/styles/emergency.module.css'
import { VscTools } from "react-icons/vsc";


function Emergency() {
  return (
    <div className={styles.maindiv}>
      <div>
      <div className={styles.upperDiv}>
        <div className={styles.emrgencyIcon}>
          <h1><VscTools  className={styles.settingIcon}/></h1>
        </div>


        <div className={styles.headingText}>
          <h1><span className='text-[#D54E45]'>24/7 </span>Emergency Services </h1>
          <p> Need a reliable plumber at any hour?</p>
        </div>
      </div>
      </div>
      <div>
        <p className='text-zinc-500 text-lg'>Contact us for peace of mind and exceptional service whenever you need it. <br />
        We're always here to help, day or night.</p>
      </div>

      <div className={styles.lowerDiv}>
        <div className={styles.leftDiv}>
            <img src="./images/chomu.png" alt="" />
        </div>
        <div className={styles.rightDiv}>
            <div>
            <h1 className='text-black '>Leave the plumbing to us!</h1>
            <p className='text-black mt-8'>From emergency fixes to preventive maintenance, we've got you covered. Need pipe repairs, leak
fixes, or a new faucet installed? JA Plumbing 
& Drain is here to handle it all! 
No job is too small for us!</p>
            </div>
      
            <div>
            <button className="bg-white border-2 border-red-700 
        hover:bg-red-700 text-red-500 hover:text-white font-bold 
        sm:px-6 md:px-12 lg:px-12
        sm:py-1 md:py-1 lg:py-2
        rounded bg-transparent mt-8">
        +1647-703-7407
        </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Emergency
