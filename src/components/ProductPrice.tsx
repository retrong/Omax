import Image from "next/image";
import { blur, second } from "../../public";
import { Button } from "./Button";
import styles from "./style";

export default function ProductPrice() {
  return (
		<section id="product" className={`${styles.paddingY}`}>
			<div>
				<div className="flex flex-1 flex-col justify-center items-center relative">
					<p className=" font-roboto font-normal text-green italic">
						Lorem ipsum
					</p>
					<h2 className="font-semibold font-roboto text-primary text-[20px] sm:text-[24px] leading-[24px] sm:leading-[20px]">
						Product Prices
					</h2>
					<span className="border-2 border-green w-[50px] block mt-4"></span>
				</div>

				<div>
					<div className="pt-6">
						<div className="flex sm:justify-between items-center flex-wrap gap-6 justify-center">
							<div className=" flex flex-col justify-center items-center w-[280px] h-[320px] bg-dimWhite shadow-xl p-5 rounded-lg gap-4 text-center py-6 mb-0 sm:mb-3">
								<div className="w-full flex flex-col items-center justify-center py-[10px]">
									<Image
										src={blur}
										alt="testimony image"
										className="w-[120px] h-[120px] object-contain rounded-full"
									/>

									<div className="mt-5">
										<h3 className="font-roboto font-normal text-primary text-[20px] leading-[18px]">
											Basic
										</h3>
										<p className="font-roboto font-semibold text-primary sm:text-[24px] text-[20px] leading-[22px] text-center mt-5">
											$8.99
										</p>
										<div className="space-y-1">
											<p className="font-roboto font-bold text-[22px] sm:text-[24px] leading-[20px] text-green py-4">
												500g
											</p>
											{/* <p>27 Serving Per Pack</p> */}
										</div>
									</div>
								</div>
							</div>

							<div className=" flex flex-col justify-center items-center w-[280px] h-[320px] bg-dimWhite shadow-xl p-5 rounded-lg gap-4 text-center py-6">
								<div className="w-full flex flex-col items-center justify-center py-[10px]">
									<Image
										src={second}
										alt="testimony image"
										className="w-[120px] h-[120px] object-contain rounded-full"
									/>
									<h3 className="font-roboto font-normal text-primary text-[20px] leading-[18px]">
										Standard
									</h3>
									<p className="font-roboto font-semibold text-primary sm:text-[24px] text-[20px] leading-[18px] text-center mt-5">
										$15.88
									</p>
									<div className="space-y-1">
										<p className="font-roboto font-bold text-[22px] sm:text-[24px] leading-[20px] text-green py-4">
											1kg
										</p>
										{/* <p>50 Serving Per Pack</p> */}
									</div>
								</div>
							</div>

							<div className=" flex flex-col justify-center items-center w-[280px] h-[320px] bg-dimWhite shadow-xl p-5 rounded-lg gap-4 text-center py-6">
								<div className="w-full flex flex-col items-center justify-center py-[10px]">
									<Image
										src={second}
										alt="testimony image"
										className="w-[120px] h-[120px] object-contain rounded-full"
									/>
									<h3 className="font-roboto font-normal text-primary text-[20px] leading-[18px]">
										Premium
									</h3>
									<p className="font-roboto font-semibold text-primary sm:text-[24px] text-[20px] leading-[18px] text-center mt-5">
										$23.90
									</p>
									<div className="space-y-1">
										<p className="font-roboto font-bold text-[22px] sm:text-[24px] leading-[20px] text-green py-4">
											1.5kg
										</p>
										{/* <p className="font-cabin font-normal text-[18px] leading-[22px]">65 Serving Per Pack</p> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
