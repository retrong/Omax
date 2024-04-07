import Image from 'next/image';
import React from 'react';
import { second } from '../../public';
import { Button } from './Button';

interface productCardProps{
    productTitle: string;
    productPrice: string;
    productSize: string;
    productFlavour: string;
    img: any;
}

const ProductCard: React.FC<productCardProps> = ({productPrice, productTitle, productSize, productFlavour, img}) => {
  return (
		<div className="flex flex-col w-[250px] h-fit bg-[#fbf7f5] items-center border border-bg-cyan-300 rounded-2xl">
			<div className=" w-[200px] h-[200px] my-5">
				<Image
					src={img}
					alt="product image"
					className=" object-contain h-fit w-fit rotate-12"
				/>
			</div>
			<div className="bg-white w-full py-2 rounded-b-2xl">
				<div className="flex flex-row mt-2 justify-between w-full px-3">
					<h3
						id="product-title"
						className=" font-roboto font-normal text-[18px] text-neutral-700 leading-[24px] capitalize flex gap-1"
					>
						{productTitle}{' '}
						<span className=" italic text-green">{productSize}</span>
					</h3>
					<p className="font-roboto font-bold text-[20px] text-neutral-700 leading-[24px]">
						{'$'} {productPrice}
					</p>
				</div>
				<p className="font-roboto font-thin text-[12px] leading-[20px] text-gray-300 my-1 px-2">
					2 types of flavours available
				</p>
				<p className="font-roboto font-semibold text-[16px] leading-[24px] text-amber-950 my-1 px-2 capitalize">
					{productFlavour}
				</p>
				<div className="my-2 flex flex-row justify-between px-2">
					<Button styles="text-[12px] font-roboto bg-black text-white px-6">
						Add to Cart
					</Button>
					<Button styles="text-[12px] font-roboto bg-white px-6">
						Read More
					</Button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
