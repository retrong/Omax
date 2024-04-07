import Image from "next/image";
import { double } from "../../public";


export default function LearnBtn({styles, children} : {styles: string, children: string}) {
  return (
    <div className={`text-dimWhite hover:bg-dimWhite hover:text-primary bg-dimAsh rounded-lg font-bold py-2 px-6 border cursor-pointer align-middle text-[1.1rem] text-center ${styles} flex justify-center mt-0 max-[390px]:mt-5 `}>
		{children}
        <span className=" ml-2"><Image src={double} alt="Right arrow" className="w-[20px] h-[20px] object-contain" /></span>
	</div>
  )
}


