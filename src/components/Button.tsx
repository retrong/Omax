import Image from "next/image";
import { arrow } from "../../public";

export const Button = ({children}: {children: string}) => {
  return (
		<button className={`bg-dimWhite hover:bg-dimAsh text-[1.1rem] text-primary hover:text-dimWhite font-bold py-3 px-4 rounded-full cursor-pointer flex items-center border-slate-300 border justify-center`}>
			{children}
            <span className=" ml-2"><Image src={arrow} alt="Right arrow" className="w-[24px] h-[24px] object-contain" /></span>
		</button>
	);
}