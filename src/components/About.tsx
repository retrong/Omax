import { abouts } from "@/constants";
import Image from "next/image";
import { main } from "../../public";
import styles from "./style";

export default function About() {
  return (
    <section className={`${styles.paddingY}`}>
        <div>
            <div>
                <div className="flex flex-1 flex-col justify-center items-center relative">
                    <p className=" font-roboto font-normal text-green italic">Lorem ipsum</p>
                    <h2 className="font-semibold font-roboto text-primary text-[20px] sm:text-[24px] leading-[24px] sm:leading-[20px]">Lorem ipsum dolor sit</h2>
                    <span className="border-2 border-green w-[50px] block mt-3"></span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-5 sm:mt-10">
                <div className=" flex justify-center">
                    <Image
                        src={main}
                        alt="Main Image"
                        className="w-[450px] h-[400px] object-contain"
                    />
                </div>
                <div className="">
                    <p className=" italic text-green font-normal font-roboto">Your Dream</p>
                    <h4 className=" font-roboto font-medium text-primary text-[18px] leading-[22px] mb-5">Body is just a click away</h4>
                    
                    {abouts.map((about) => (
                        <div className="">
                            <div key={about.id} className="flex-col max-w-[250px]">
                                {/* <div className="inline-block h-[150px] min-h-[1em] w-0.5 self-stretch bg-green opacity-100 dark:opacity-50"></div> */}
                                <div className="">
                                    <h4 className=" font-roboto font-medium text-secondary text-[18px] leading-[18px]">
                                        {about.title}
                                    </h4>
                                    <p className="font-roboto font-normal text-primary text-[16px] leading-[16px]">
                                        {about.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
