import Link from "next/link";
import { Button } from "./Button";
import styles from "./style";

export default function Cta() {
  return (
		<section
			className={`flex items-center justify-between mb-10 py-8 px-8 sm:flex-row flex-col bg-green rounded-[20px] w-full`}
		>
			<div>
				<h2 className={`${styles.heading2} text-black`}>
					Place an order for our supplement today!
				</h2>
				<p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>
					Healthy blend to help boost performance and muscle growth
				</p>
			</div>

			<Link href="#order" className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
				<Button>Order now</Button>
			</Link>
		</section>
	);
}
