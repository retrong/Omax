"use client"

import { easeIn, motion } from "framer-motion";
import Image from "next/image";
import { main } from "../../public";
import Button from "./Button";
import LearnBtn from "./LearnBtn";
import styles from "./style";

export default function Hero() {
    const eased = easeIn(0.5);
    
  return (
    <main id="home" className={`flex md:flex-row flex-col py-6 sm:py-10`}>
        <div className={`${styles.flexStart} flex-col`}>
            <div className="flex flex-col items-start hero-text">
                <p className="text-green font-roboto font-semibold ss:text-[18px] text-[16px] ss:leading-[18px] leading-[16px]">100% Organic Protein Powder</p>
                <h1 className="flex-1 font-roboto font-bold text-[56px] ss:text-[60px] leading-[65px] ss:leading-[75px] text-primary">
                    All-in-one <br />
                    Supplement for <br /> 
                    Your Strength
                </h1>
                <p className=" max-w-[470px] font-normal font-roboto mt-4 text-secondary">Nutritional Supplement filled with natural ingredents, all working together to support your strength and health</p>

                <div className="mt-10 flex flex-wrap justify-between">
                    <Button />
                    <LearnBtn styles="xs:ml-16 ml-0.5" />
                </div>
            </div>

        </div>
        <motion.div 
            className={`flex flex-1 ${styles.flexCenter} my-10 md:my-10 relative`}
            initial={{opacity: 0, scale: 0.5}}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01], scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}}}
        >
            <Image src={main} alt="Hero Image" className="object-contain relative z-[5]"/>
        </motion.div>

    </main>
  )
}


// Build
//  a hero section with text on the right and image on the left
// a button below the text to order and 
// 1. use a grid to divide page content 
// 2. 
