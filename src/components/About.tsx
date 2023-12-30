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
                    <span className="border-2 border-green w-[50px] block mt-4"></span>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 grid-flow-row gap-4 mt-5 sm:mt-10">
                <div className=" flex justify-center">
                    <Image
                        src={main}
                        alt="Main Image"
                        className="w-[450px] h-[400px] object-contain"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <div>
                        <p className=" italic text-green text-[20px] sm:text-[24px] font-normal font-roboto">Your Dream</p>
                        <h4 className=" font-roboto font-medium text-primary text-[24px] sm:text-[18px] leading-[22px] mb-5 mt-1">Body is just a click away</h4>
                    </div>
                    
                    <div className="flex flex-wrap relative justify-between items-center">
                        {abouts.map((about) => (
                            <div className="mb-6">
                                <div key={about.id} className="flex gap-2 max-w-[250px]">
                                    <div className="inline-block h-auto min-h-[1em] w-2 self-stretch bg-green opacity-100 dark:opacity-50"></div>
                                    <div className="">
                                        <h4 className=" font-roboto font-semibold text-secondary text-[22px] sm:text-[18px] leading-[18px]">
                                            {about.title}
                                        </h4>
                                        <p className="font-roboto font-normal text-primary text-[18px] sm:text-[16px] leading-[16px] mt-2">
                                            {about.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
