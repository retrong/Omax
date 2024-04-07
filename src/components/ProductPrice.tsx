import { productDetails } from "@/constants";
import ProductCard from "./productCard";
import styles from "./style";


export default function ProductPrice() {
  return (
		<section id="product" className={`${styles.paddingY}`}>
			<div>
				<div className="flex flex-1 flex-col justify-center items-center relative">
					<p className=" font-roboto font-normal text-green italic">
						List of products
					</p>
					<h2 className="font-semibold font-roboto text-primary text-[20px] sm:text-[24px] leading-[24px] sm:leading-[20px]">
						Product Prices
					</h2>
					<span className="border-2 border-green w-[50px] block mt-4"></span>
				</div>

				<div>
					<div className="pt-6">
						<div className="flex sm:justify-between items-center flex-wrap gap-6 justify-center">

							{productDetails.map((product) => (
								<ProductCard 
                                    key={product.productTitle} 
                                    productPrice={product.ProductPrice} 
                                    productFlavour={product.productFlavour} 
                                    productTitle={product.productTitle} 
                                    img={product.img} 
                                    productSize={product.productSize}  
                                />
							))}
							
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
