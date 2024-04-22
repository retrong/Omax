import Image from "next/image";
import { second } from "../../public";

export default function Gurantee() {
  return (
		<section className={`h-[30%] w-full`}>
			<div className="flex flex-wrap flex-col ss:flex-row relative ss:justify-between items-center justify-center py-4 gap-4">
				<div className="flex flex-col items-center">
					{/* <Image
						src={second}
						alt="secure image"
						className="w-[100px] h-[100px] object-contain"
					/> */}
					<h4 className=" font-roboto font-semibold text-white text-[18px] leading-[20px] sm:leading-[22px] w-[150px] text-center ">
						100% Payment Secured
					</h4>
				</div>
				<div className="flex flex-col items-center">
					{/* <Image
						src={second}
						alt="Full support image"
						className="w-[100px] h-[100px] object-contain"
					/> */}
					<h4 className=" font-roboto font-semibold text-white text-[18px] leading-[20px] sm:leading-[22px] w-[150px] text-center">
						24 hours / 7 days support
					</h4>
				</div>
				<div className="flex flex-col items-center">
					{/* <Image
						src={second}
						alt="Natural ingredient image"
						className="w-[100px] h-[100px] object-contain"
					/> */}
					<h4 className=" font-roboto font-semibold text-white text-[18px] leading-[20px] sm:leading-[22px] w-[150px] text-center">
						100% Natural Ingredients
					</h4>
				</div>
			</div>
		</section>
	);
}
