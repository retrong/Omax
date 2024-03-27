import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { disconnected } from '../../../../public';

export default function Product() {
  return (
		<div className="flex justify-center align-middle text-center items-center w-[100%] h-screen">
			<div className="flex flex-col px-4 py-6">
				<Image src={disconnected} alt="404"></Image>
				<h3 className="text-lg text-secondary font-semibold transform translate-x-5 py-2">
					Page is under development Return to the previous page
				</h3>
				<Link href="/" className="px-2 py-2 text-white font-roboto rounded-lg hover:bg-primary bg-green hover:text-white active:bg-dimAsh focus:bg-primary focus:opacity-50 ">
					<Link href="/">Home</Link>
				</Link>
			</div>
		</div>
	);
}
