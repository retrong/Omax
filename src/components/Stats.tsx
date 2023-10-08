import Image from "next/image";
import { main } from "../../public";
import Button from "./Button";
import styles from "./style";

export default function Stats() {
  return (
		<section className="w-full h-auto relative py-6">
			<div className="flex flex-wrap flex-row items-center justify-between">
				<div className="">
					<Image
						src={main}
						alt="Product Image"
						className="w-[180px] h-[180px] object-contain top-[-45px] absolute"
					/>
				</div>
				<div className="flex flex-wrap flex-col ss:flex-row">
					<div>
						<p className="italic font-roboto font-normal text-dimWhite text-[16px] leading-[24px]">
							Get Your Natural
						</p>
						<h2 className="font-roboto font-semibold xs:text-[30px] text-[24px] text-white xs:leading-[44.8px] leading-[34.8px] w-full">
							Protein Powder with Powerful all in one formular
						</h2>
					</div>
                    <div className="ml-0 sm:ml-20">
                        <Button />
                    </div>

				</div>
			</div>
		</section>
	);
}
