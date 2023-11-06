"use client"

import { products } from "@/constants";
import Image from "next/image";
import { main } from "../../public";
import Accordion from "./Accordion/Accordion";
import styles from "./style";

export default function SupplementFact() {
  return (
    <section className={`${styles.paddingY}`}>
        <div className="">
            <div className="flex flex-1 flex-col justify-center items-center relative">
                <p className=" font-roboto font-normal text-green italic">
                    Lorem ipsum
                </p>
                <h2 className="font-semibold font-roboto text-primary text-[20px] sm:text-[24px] leading-[24px] sm:leading-[20px]">
                    Product Prices
                </h2>
                <span className="border-2 border-green w-[50px] block mt-4"></span>
            </div>

            {/* <div className="grid grid-cols-3 py-4">
                <div className="flex flex-col gap-4">
                    {products.map((product) => (
                        <div 
                            key={product.id}
                            className="flex flex-col justify-end items-end w-[400px] h-[200px] bg-white shadow-xl p-5 rounded-md"
                        >
                            <div className="px-4">
                                <h3>{product.title}</h3>
                                <p>{product.content}</p>
                            </div>
                            <div className="flex relative circle object-contain left-12 bottom-16 shadow-2xl border-black border-2">
                                <Image 
                                    src={product.icon} alt="supplement fact image" 
                                    className="w-[58px] h-[58px] object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <Image src={main} alt="product image" />
                </div>

                <div>
                    {products.map((product) => (
                        <div key={product.id}>
                            <h3>{product.title}</h3>
                            <p>{product.content}</p>
                        </div>
                    ))}
                </div>
            </div> */}

            <div className="grid grid-cols-2 mt-8">
                <div className="grid">
                    <Accordion />
                </div>

                <div className="grid">
                    <Image src={main} alt="product image" className="" />
                </div>

            </div>

        </div>
    </section>
  )
}
