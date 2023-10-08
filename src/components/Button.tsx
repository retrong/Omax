import Image from "next/image";
import { arrow } from "../../public";

export default function Button() {
  return (
		<div className="bg-dimWhite hover:bg-dimAsh text-primary hover:text-dimWhite font-bold py-4 px-2 rounded-full cursor-pointer w-[170px] flex items-center justify-center">
			Shop Now 
            <span className=" ml-2"><Image src={arrow} alt="Right arrow" className="w-[24px] h-[24px] object-contain" /></span>
		</div>
	);
}
