"use client"

import { easeIn, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { main } from "../../public";
import { Button } from "./Button";
import LearnBtn from "./LearnBtn";
import styles from "./style";

export default function Hero() {
    const eased = easeIn(0.5);
    
  return (
    <main id="home" className={`flex md:flex-row flex-col py-6 sm:py-10 sm:mt-0 mt-20`}>
        <div className={`${styles.flexStart} flex-col flex-1`}>
            <div className="flex flex-col items-start hero-text">
                <p className="text-green font-roboto font-semibold ss:text-[18px] text-[16px] ss:leading-[18px] leading-[16px]">100% Organic Protein Powder</p>
                <h1 className="flex-1 font-roboto font-bold text-[48px] ss:text-[60px] leading-[65px] ss:leading-[75px] text-primary">
                    All-in-one <br />
                    Supplement for <br /> 
                    Your Strength
                </h1>
                <p className=" max-w-[470px] font-normal font-roboto text-[20px] sm:text-[20px] mt-4 text-secondary">Nutritional Supplement filled with natural ingredents, all working together to support your strength and health</p>

                <div className="mt-10 flex flex-wrap justify-between">
                    <Link href="#order">
                        <Button styles="hover:bg-green">Shop now</Button>
                    </Link>
                    <Link href="#features">
                        <LearnBtn styles="xs:ml-16 ml-2 bg-green">Learn More</LearnBtn>
                    </Link>
                </div>
            </div>

        </div>
        <motion.div 
            className={`flex flex-1 ${styles.flexCenter} my-6 sm:my-0 relative hero-image`}
            initial={{opacity: 0, scale: 0.5}}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01], scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}}}
        >
            <Image src={main} alt="Hero Image" className="object-contain relative z-[5] img"/>
        </motion.div>

    </main>
  )
}