import styles from "./style";

export default function OrderForm() {
  return (
		<section className={`${styles.paddingY}`}>
			<div>
				<div className="flex flex-1 flex-col justify-center items-center relative">
					<p className=" font-roboto font-normal text-green italic">
						Lorem ipsum
					</p>
					<h2 className="font-semibold font-roboto text-primary text-[20px] sm:text-[24px] leading-[24px] sm:leading-[20px]">
						Lorem ipsum dolor sit
					</h2>
					<span className="border-2 border-green w-[50px] block mt-4"></span>
				</div>
				<div className="py-5">
					<form action="">
						<input type="text" placeholder="Full Name..." className="" />
						<input type="text" placeholder="Address..." className="" />
						<input type="text" placeholder="city" />
						<input type="text" placeholder="country" />
						<input type="email" placeholder="Email" className="" />
						<input
							type="tel"
							placeholder="Phone Number"
							className=""
							maxLength={11}
							minLength={11}
							required
						/>
						<input type="text" placeholder="product option" />
						{/* product option- muscle mass or lean powder */}
						<input type="text" placeholder="package size" />
						{/* will automatically update the price depending on the option for package size */}
						<input type="checkbox" />
						{/* <label>Subscribe to newsletter to get more info on products and services (discounts)</label> */}
						<input type="submit" className="border-2" />
						<input type="number" placeholder="product quantity" />
					</form>
				</div>
			</div>
		</section>
	);
}
