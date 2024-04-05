import Image from "next/image";
import { double } from "../../public";


export default function LearnBtn({styles, children} : {styles: string, children: string}) {
  return (
    <div className={`text-dimWhite hover:bg-dimWhite hover:text-primary bg-dimAsh rounded-full font-bold py-3 px-6 border-2 cursor-pointer align-middle text-[1rem] text-center ${styles} flex justify-center mt-0 max-[390px]:mt-5 `}>
		{children}
        <span className=" ml-2"><Image src={double} alt="Right arrow" className="w-[24px] h-[24px] object-contain" /></span>
	</div>
  )
}


