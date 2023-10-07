import Image from "next/image";
import { double } from "../../public";


export default function LearnBtn({styles} : {styles: string}) {
  return (
    <div id="product" className={`text-dimWhite hover:bg-dimWhite hover:text-primary bg-dimAsh font-bold py-3 px-2 border-2 cursor-pointer w-[170px] text-center rounded-sm ${styles} flex justify-center ss:mt-0 mt-4`}>
		Learn more
        <span className=" ml-2"><Image src={double} alt="Right arrow" className="w-[24px] h-[24px] object-contain" /></span>
	</div>
  )
}


