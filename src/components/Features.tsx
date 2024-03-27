import { features } from "@/constants";
import Image, { StaticImageData } from "next/image";
import { blur } from "../../public";
import styles from "./style";

const FeatureCard = ({icon, title, content, index}: {icon: StaticImageData; title: string; content: string; index: number}) => (
    <div className={`flex flex-col ${index !== features.length -1 ? "mb-0" : "mb-0"} justify-center items-center max-w-[250px] sm:mb-0 mb-5`}>
        <div className="h-[64px] w-[64px] rounded-full">
            <Image 
                src={icon} 
                alt="feature icon image"
                className="w-[64px]  h-[64px] object-contain" 
            />
        </div>
        <div className="flex flex-col flex-wrap justify-center items-center">
            <h3 className="font-roboto font-semibold text-[24px] sm:text-[20px] leading-[26px] sm:leading-[20px] text-primary">
                {title}
            </h3>
            <p className="font-roboto font-normal text-[20px] sm:text-[18px] leading-[18px] sm:leading-[16px] text-primary mt-2 text-center">
                {content}
            </p>
        </div>
    </div>
)

export default function Features() {
  return (
    <section id="features" className={`${styles.paddingY} w-full`}>
        <div>
            <div className="flex flex-1 flex-col justify-center items-center relative">
                <p className=" font-roboto font-normal text-green italic">Features</p>
                <h2 className="font-semibold font-roboto text-primary text-[20px] sm:text-[24px] leading-[24px] sm:leading-[20px]">Lorem ipsum dolor sit</h2>
                <span className="border-2 border-green w-[50px] block mt-3"></span>

            </div>

            <div className="flex flex-wrap flex-row relative pt-6 sm:pt-16 w-full justify-center sm:justify-between items-center">
                
                {features.map((feature, index) => (
                    <div key={feature.id} className="md:mt-0 mt-2">
                        <FeatureCard {...feature} index={index} />
                    </div>
                ))}

            </div>

        </div>
        
    </section>
  )
}
