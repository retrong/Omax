import Image from "next/image";
import { main } from "../../public";
import { Button } from "./Button";

export default function Stats() {
  return (
		<section className="w-full h-auto relative py-2 md:py-3">
			<div className="flex flex-wrap flex-col items-center sm:flex-row">
				<div className=" basis-1/3">
					<Image
						src={main}
						alt="Product Image"
						className="w-[180px] h-[180px] object-contain lg:top-[-30px] lg:absolute relative top-0"
					/>
				</div>
				<div className="flex flex-1 flex-col sm:flex-row justify-end w-full items-center">
					<div className="sm:w-full my-5 sm:my-0">
						<p className="italic font-roboto font-normal text-dimWhite text-[16px] leading-[24px]">
							Get Your Natural
						</p>
						<h2 className="font-roboto font-semibold xs:text-[30px] text-[24px] text-white xs:leading-[44.8px] leading-[34.8px] w-full">
							Protein Powder with Powerful all in one formular
						</h2>
					</div>
                    <div className="ml-0 md:ml-20 sm:mt-3 mt-0">
                        <Button >Order now</Button>
                    </div>

				</div>
			</div>
		</section>
	);
}
