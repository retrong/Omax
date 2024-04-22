import Image from "next/image";
import { BsChevronDoubleRight } from 'react-icons/bs';
import { FaAngleDoubleRight } from 'react-icons/fa';


export default function LearnBtn({styles, children} : {styles: string, children: string}) {
  return (
		<div
			className={`text-dimWhite hover:bg-dimWhite hover:text-primary bg-dimAsh rounded-lg font-bold py-2 px-6 border cursor-pointer align-middle text-[1.1rem] text-center ${styles} flex justify-center mt-0 max-[390px]:mt-5 items-center`}
		>
			{children}
			<span className=" ml-2">
				<FaAngleDoubleRight
					color="white"
					size={20}
					className="learn-button-color"
				/>
			</span>
		</div>
	);
}


