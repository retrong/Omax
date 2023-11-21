import { navLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { close, open } from '../../public';
import { Button } from './Button';



export default function Sidebar() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="sm:hidden flex flex-1 justify-end items-center">
			<Image
				src={toggle ? close : open}
				alt="menu"
				className="w-[28px] h-[28px] object-contain"
				onClick={() => setToggle((prev) => !prev)}
			/>

			<div
				className={`${
					toggle ? 'flex' : 'hidden'
				} p-6 fixed flex-col right-0 my-2 top-20 rounded-xl z-[100] sidebar`}
			>
				<ul className="list-none flex flex-col items-center flex-1">
					{navLinks.map((nav, index) => (
						<li
							key={nav.id}
							className={`font-roboto font-normal text-primary hover:text-dimAsh cursor-pointer text-[18px] ${index === navLinks.length - 1 ? 'mb-8' : 'mb-6'}`}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>

				<Link href="#" className='flex items-center justify-center'> 
                    <Button>Order now</Button>
                </Link>
			</div>
		</div>
	);
}
