import { footerLinks } from "@/constants";
import { addDataToFirestore } from '@/server/firebase/firebase.utli';

import { Button } from "./Button";
import styles from "./style";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Footer() {

    const {handleSubmit, register, reset, formState: {errors} } = useForm()

    const onSubmit = async (newsletter: any) => {
        try {
            await addDataToFirestore(' NewsletterList', newsletter);
            console.log(newsletter, 'newsletter set');

            reset();
        } catch (error) {
            // console.error('Error adding document: ', error)
        }
	};

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return (
		<section className={`w-full h-auto py-4 sm:py-8`}>
			<div className="flex sm:justify-between md:flex-row flex-col justify-start items-start sm:w-auto w-full sm:gap-16 gap-4">
				<div className="sm:max-w-[350px] w-full flex flex-col flex-wrap gap-2">
					<h1
						className={`font-roboto font-bold xs:text-[50px] text-[36px] text-dimWhite leading-[56.4px] xs:leading-[44px] w-full  flex justify-start`}
					>
						Prime <span className="text-[#77C589]">Max</span>
					</h1>
					<h3 className="font-roboto font-semibold xs:text-[18px] text-[16px] text-dimWhite leading-[18.4px] xs:leading-[16px] w-full  flex justify-start">
						Pre Workout protein powder
					</h3>
					<p className="font-roboto font-normal xs:text-[16px] text-[16px] text-dimWhite leading-[16.4px] xs:leading-[16px] w-[300px] flex justify-start ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit
						incidunt consectetur repellat labore dicta harum porro vel error
						ratione.
					</p>
				</div>

				<div className="flex-[1.2] flex flex-row ss:justify-between justify-left flex-wrap md:mt-0 mt-10 ">
					{footerLinks.map((footerLink) => (
						<div key={footerLink.id} className="text-white px-4 py-2">
							<h4 className="font-cabin font-semibold text-[18px] leading-[24px] text-white">
								{footerLink.title}
							</h4>
							<ul className=" mt-2 list-none cursor-pointer">
								{footerLink.links.map((link, index) => (
									<li
										key={link.name}
										className={` font-normal font-cabin text-[16px] leading-[22px] ${
											index !== footerLink.links.length - 1 ? 'mb-2' : 'mb-0'
										} hover:text-[#77C589]`}
									>
										{link.name}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="flex flex-col justify-start mt-4 sm:mt-0 py-2 px-4">
					<div>
						<h2 className="font-roboto font-bold xs:text-[18px] text-[20px] text-dimWhite leading-[24px] xs:leading-[24px] w-full">
							Subscribe to our Newsletter
						</h2>
					</div>

					<div
						className="flex flex-col gap-4 mt-2"
						onSubmit={handleSubmit(onSubmit)}
					>
						<label htmlFor="newsletter" className="flex flex-col gap-4">
							{/* <span className="font-roboto text-white font-normal text-[16px] leading-[24px]">
								Your Email
							</span> */}
							<input
								type="email"
								id="newsletter"
								placeholder="Enter Your Email"
								className="w-[250px] font-roboto max-w-[250px] border border-white placeholder:text-white text-black placeholder:text-[13px] "
								{...register('newsletter', {
									pattern: emailRegex,
								})}
							/>
							{errors.email && (
								<span className="error px-2">Enter a valid email</span>
							)}
						</label>
						<button
							type="submit"
							className="px-4 py-2 bg-white text-black font-roboto font-normal text-[16px] hover:bg-secondary border border-white hover:text-white focus:bg-green/25 focus:text-white active:bg-green/25 active:text-white rounded-lg w-[100px] "
						>
							Subscribe
						</button>
					</div>
				</div>
			</div>

			<div className="w-full items-center pt-6 mt-4 border-t-2 border-t-dimAsh flex justify-end">
				<p className=" font-mono text-[16px] sm:text-[16px] leading-[18px] sm:leading-[16px] text-dimWhite">
					{' '}
					Copyright &copy;2023 All Rights Reserved. Prime
					<span className=" text-[#77C589]">Max.</span>
				</p>
			</div>
		</section>
	);
}
