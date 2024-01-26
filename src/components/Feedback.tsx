"use client";

import { feedbacks } from "@/constants";
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from "./style";


export default class Feedback extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplayspeed: 2000,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        };

        return (
            <section className={`${styles.paddingY} w-full`}>
                <div className="items-center">
                    <div className="flex flex-col flex-wrap justify-center items-center text-center sm:mb-0 mb-5">
                        <p className="font-roboto font-semibold italic text-green text-[18px] sm:text-[18px] leading-[18px]">Muscle Gain and Weight Loose With Omax</p>
                        <h3 className="font-semibold font-roboto text-primary text-[20px] sm:text-[24px] leading-[24px] sm:leading-[20px] mt-2">Client Feedback</h3>
                    </div>
        
                    <Slider {...settings} className="py-4 sm:py-8 w-full h-full cursor-pointer">
                        {feedbacks.map((feedback) => (
                            <div key={feedback.id} className="">
                                <div className="flex justify-center items-center">
                                    <div className=" flex flex-col justify-center items-center w-[300px] h-[400px] bg-green shadow-xl shadow-slate-300 p-5 rounded-lg gap-4 feedback-card mb-4">
                                        <Image 
                                            src={feedback.icon} 
                                            alt="testimony image"
                                            className="w-[120px] h-[120px] object-contain rounded-full" 
                                        />
                                        <h3 className="font-roboto font-normal text-black text-[20px] leading-[18px]">
                                            {feedback.title}
                                        </h3>
                                        <p className="font-roboto font-light text-black text-[18px] leading-[20px] text-center mt-5">
                                            {feedback.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
        
                    </Slider>
        
                </div>
            </section>
        )
    }

}


// design the p with "Muscle gain and weight loose with Omax"
// h3 "Client Feedbacks"

// display client feedback in a casserole
