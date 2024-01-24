import Image from "next/image";
import { arrow } from "../../public";

export const Button = ({children}: {children: string}) => {
  return (
		<div className={`bg-dimWhite hover:bg-dimAsh text-[16.5px] text-primary hover:text-dimWhite font-bold py-[14px] px-2 rounded-full cursor-pointer w-[170px] flex items-center justify-center`}>
			{children}
            <span className=" ml-2"><Image src={arrow} alt="Right arrow" className="w-[24px] h-[24px] object-contain" /></span>
		</div>
	);
}