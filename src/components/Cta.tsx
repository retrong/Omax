import Button from "./Button";
import styles from "./style";

export default function Cta() {
  return (
		<section
			className={`flex items-center justify-between ${styles.marginY} py-8 px-8 sm:flex-row flex-col bg-green rounded-[20px] w-full`}
		>
			<div>
				<h2 className={`${styles.heading2} text-black`}>
					Let's try our service now!
				</h2>
				<p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>
					Everything you need to accept card payments and grow your business
					anywhere on the planet.
				</p>
			</div>

			<div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
				<Button />
			</div>
		</section>
	);
}
