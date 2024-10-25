import React from 'react';
import { BsFillDropletFill } from "react-icons/bs"; 
import { BiSolidBuildingHouse } from "react-icons/bi";
import { GiKitchenTap, GiAutoRepair } from "react-icons/gi";
import { PiPipe, PiPipeWrenchBold } from "react-icons/pi";
import Card from './SubComponents/Card';
import styles from '/styles/emergency.module.css'
import { VscTools } from "react-icons/vsc";

function Services() {
  return (
  
      <div className="flex justify-center bg-gradient-to-b  from-white to-[#F6D9D7] flex-wrap gap-8 px-16">
      <div className='w-full pt-12 pb-12'>
      <div> 
      <div className={styles.upperDiv}>
        <div className={styles.emrgencyIcon}>
          <h1><VscTools  className={styles.settingIcon}/></h1>
        </div>


        <div className={styles.headingText}>
          <h1><span className='text-[#D54E45]'>Plumbing </span>Services We Provide </h1>
          <p> Looking for reliable plumbing experts?</p>
        </div>
      </div>
      <div className='text-center'>
        <p className='text-black text-lg pl-[25%] pr-[25%]'>Our licensed professionals are available 24/7, always on time, and ready to handle all your plumbing needs. Trust JA Plumbing & Drain for quality service every time!</p>
      </div>
      </div>
      </div>
      <div>
        
      </div>
        <Card icon={<BsFillDropletFill />} text="Low Water
Pressure" para="Lorem ipsum odor amet, consectetuer adipiscing elit. Primis adipiscing aenean gravida lacinia dictumst cubilia. Eleifend taciti sed molestie rhoncus aptent mattis. Eleifend proin proin faci Lorem ipsum odor amet, consectetuer adipiscing elit. Primis adipiscing aenean gravida lacinia dictumst cubilia. Eleifend taciti sed molestie rhoncus aptent mattis. Eleifend proin proin faci" />

        <Card icon={<BiSolidBuildingHouse />} text="Custom Home 
Plumbing" para="Lorem ipsum odor amet, consectetuer adipiscing elit. Primis adipiscing aenean gravida lacinia dictumst cubilia. Eleifend taciti sed molestie rhoncus aptent mattis. Eleifend proin proin faci Lorem ipsum odor amet, consectetuer adipiscing elit. Primis adipiscing aenean gravida lacinia dictumst cubilia. Eleifend taciti sed molestie rhoncus aptent mattis. Eleifend proin proin faci" />

        <Card icon={<GiKitchenTap />} text="Bathroom &
Kitchen 
Renovations" para="Lorem ipsum odor amet, consectetuer adipiscing elit. Primis adipiscing aenean gravida lacinia dictumst cubilia. Eleifend taciti sed molestie rhoncus aptent mattis. Eleifend proin proin faci Lorem ipsum odor amet, consectetuer adipiscing elit. Primis adipiscing aenean gravida lacinia dictumst cubilia. Eleifend taciti sed molestie rhoncus aptent mattis. Eleifend proin proin faci" />
      <br />
        <Card icon={<PiPipe />} text="Plugged 
Drain" para="Lorem ipsum odor amet, consectetuer adipiscing elit. Primis adipiscing aenean gravida lacinia dictumst cubilia. Eleifend taciti sed molestie rhoncus aptent mattis. Eleifend proin proin faci Lorem ipsum odor amet, consectetuer adipiscing elit. Primis adipiscing aenean gravida lacinia dictumst cubilia. Eleifend taciti sed molestie rhoncus aptent mattis. Eleifend proin proin faci" />

        <Card icon={<PiPipeWrenchBold />} text="Back-up Sewers" para="Lorem ipsum odor amet, consectetuer adipiscing elit. Primis adipiscing aenean gravida lacinia dictumst cubilia. Eleifend taciti sed molestie rhoncus aptent mattis. Eleifend proin proin faci Lorem ipsum odor amet, consectetuer adipiscing elit. Primis adipiscing aenean gravida lacinia dictumst cubilia. Eleifend taciti sed molestie rhoncus aptent mattis. Eleifend proin proin faci" />

        <Card icon={<GiAutoRepair />} text="Plumbing 
Repairs & Alternations" para="Lorem ipsum odor amet, consectetuer adipiscing elit. Primis adipiscing aenean gravida lacinia dictumst cubilia. Eleifend taciti sed molestie rhoncus aptent mattis. Eleifend proin proin faci Lorem ipsum odor amet, consectetuer adipiscing elit. Primis adipiscing aenean gravida lacinia dictumst cubilia. Eleifend taciti sed molestie rhoncus aptent mattis. Eleifend proin proin faci" />


      </div>
  );
}

export default Services;
