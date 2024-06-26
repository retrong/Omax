import Form from "./form/Form";
import styles from "./style";

export default function OrderForm() {
  return (
		<>
			<section id="order" className={`${styles.paddingY}`}>
				<div className="">
					<div className="flex flex-1 flex-col justify-center items-center relative">
						<p className=" font-roboto font-normal text-green italic">
							Lorem ipsum
						</p>
						<h2 className="font-semibold font-roboto text-primary text-[20px] sm:text-[24px] leading-[24px] sm:leading-[20px]">
							Lorem ipsum dolor sit
						</h2>
						<span className="border-2 border-green w-[50px] block mt-4"></span>
					</div>

					<div className="flex flex-col sm:flex-row w-full mt-4">
						<div className="bg-white py-10 px-5 w-full flex-wrap rounded-md">
							<div>
								<div>
									<h3 className="font-semibold font-roboto text-primary text-[24px] sm:text-[26px] leading-[26px] sm:leading-[24px]">
										Address details
									</h3>
									<p className="font-roboto font-extralight text-[16px]">
										Please input your delivery details and a customer care
										representative will reach out to you
									</p>
								</div>
								<div className="mt-10">
									<h4 className="font-semibold font-roboto text-primary text-[24px] sm:text-[24px] leading-[24px] sm:leading-[20px]">
										Delivery address
									</h4>
								</div>
							</div>
							<div className="py-5">
								<Form />
							</div>
						</div>

						<div className="w-[100%] sm:w-[50%] flex flex-col ml-0 sm:ml-12 mb-10">
							<div className="bg-white rounded-lg h-[500px] w-full mt-6 md:mt-0">
								<h2></h2>
							</div>
							<div className="w-full mt-5">
								<h4 className="font-bold text-[16px] leading-[16px]">
									Need help? Contact us!
								</h4>
								<p className="font-normal text-[16px] mt-3 text-gray-500">
									Email:
								</p>
								<h5 className="font-semibold text-[18px] leading-[20px]">
									primemax@mail.com
								</h5>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
