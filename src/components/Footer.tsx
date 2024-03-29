import { footerLinks } from "@/constants";
import styles from "./style";

export default function Footer() {
  return (
		<section className={`w-full h-auto py-4 sm:py-8`}>
			<div className="flex sm:justify-between md:flex-row flex-col gap-4 justify-start items-start sm:w-auto w-full">
				<div className="sm:max-w-[350px] w-full flex flex-col flex-wrap gap-2">
					<h1
						className={`font-roboto font-bold xs:text-[50px] text-[36px] text-dimWhite leading-[56.4px] xs:leading-[44px] w-full  flex justify-start`}
					>
						Prime <span className="text-red-500">Max</span>
					</h1>
					<h3 className="font-roboto font-semibold xs:text-[18px] text-[16px] text-dimWhite leading-[18.4px] xs:leading-[16px] w-full  flex justify-start">
						Pre Workout protein powder
					</h3>
					<p className="font-roboto font-normal xs:text-[16px] text-[16px] text-dimWhite leading-[16.4px] xs:leading-[16px] w-full  flex justify-start">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit
						incidunt consectetur repellat labore dicta harum porro vel error
						ratione.
					</p>
				</div>

				<div className="flex-[1.5] w-full flex flex-row ss:justify-between justify-left flex-wrap md:mt-0 mt-10 ">
					{footerLinks.map((footerLink) => (
						<div key={footerLink.id} className="text-white px-4 py-2">
							<h4 className="font-cabin font-semibold text-[22px] leading-[27px] text-white">
								{footerLink.title}
							</h4>
							<ul className=" mt-2 list-none cursor-pointer">
								{footerLink.links.map((link, index) => (
									<li
										key={link.name}
										className={` font-normal font-cabin text-[16px] leading-[22px] ${
											index !== footerLink.links.length - 1 ? 'mb-2' : 'mb-0'
										} hover:text-red-400`}
									>
										{link.name}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="flex flex-col justify-start mt-4 sm:mt-0">
					<div>
						<h2 className="font-roboto font-bold xs:text-[24px] text-[26px] text-dimWhite leading-[34px] xs:leading-[30px] w-full">
							Contact <span className="text-red-500">Us</span>
						</h2>
						<span className="border border-gray-500 w-[50px] flex my-4"></span>
					</div>

					<div>
						<h4 className="font-roboto font-normal xs:text-[18px] text-[18px] text-dimWhite leading-[20px] xs:leading-[22px] w-full mb-2">
							Office Hours:
						</h4>
						<p className="contact-us-text mb-2">Mon - Fri: 24hrs</p>
						<p className="contact-us-text mb-2">Saturday: 10:00 - 16:00</p>
					</div>

					<div className="">
						<span className="border border-gray-500 w-full flex"></span>
						<p className="contact-us-text my-4">primemaxprotein@gmail.com</p>
						<span className="border border-gray-500 w-full flex"></span>
					</div>
				</div>
			</div>
            <div className="flex justify-end">
                <div className="flex sm:flex-row justify-end w-[35rem] flex-col py-5 gap-4">
                    <div className="">
                        <h4 className="font-cabin font-normal sm:text-[16px] sm:leading-[24px] text-[18px] leading-[20.4px] text-dimWhite">
                            Get helpful tips and industry trend that will help you in your
                            fitness journey and interesting offers. Subscribe to our
                            newsletter today!
                        </h4>
                    </div>
                    <div className="sm:ml-5 ml-0">
                        <input
                            type="email"
                            placeholder="email"
                            className="w-[250px] max-w-[250px]"
                        />
                    </div>
                </div>

            </div>
			<div className="w-full items-center pt-6 mt-4 border-t-2 border-t-dimAsh flex justify-end">
				<p className=" font-mono text-[16px] sm:text-[16px] leading-[18px] sm:leading-[16px] text-dimWhite">
					{' '}
					copyright &copy; 2023 All Rights Reserved. Prime
					<span className=" text-red-500">Max.</span>
				</p>
			</div>
		</section>
	);
}
