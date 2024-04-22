"use client"
 
import About from '@/components/About';
import Cta from '@/components/Cta';
import Features from '@/components/Features';
import Feedback from '@/components/Feedback';
import Footer from '@/components/Footer';
import Gurantee from '@/components/Gurantee';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
// import Newsletter from '@/components/Newsletter';
import OrderForm from '@/components/OrderForm';
import ProductPrice from '@/components/ProductPrice';
import Stats from '@/components/Stats';
import SupplementFact from '@/components/SupplementFact';
import styles from '@/components/style';

async function generateMetadata({ params }: { params: { id: string } }) {
	return {
		title: 'Prime max',
		description: '100% Organic Protein Powder (Prime Max)',
	};
}

export default function Home() {

	return (
		<main
			className={`w-full overflow-hidden h-15 transition-all ease-in duration-[100s]`}
		>
			<header
				className={`${styles.paddingX} ${styles.flexCenter} bg-white shadow-none sm:shadow-lg w-full fixed`}
			>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</header>

			<div
				className={`${styles.flexStart} ${styles.marginX} px-0 md:px-16 sm:mt-16 mt-0`}
			>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>

			<div className="bg-gradient-to-r from-[#af69ef] to-[#a45ee5] max-h-[20%] rounded-2xl bg-blend-color-burn shadow-xl">
				<div className={`${styles.paddingX} ${styles.flexStart} mx-0 md:mx-16`}>
					<div className={`${styles.boxWidth}`}>
						<Stats />
					</div>
				</div>
			</div>
			<div className={`${styles.paddingX} ${styles.flexStart} mx-0 md:mx-16`}>
				<div className={`${styles.boxWidth}`}>
					<Features />
				</div>
			</div>

			<div className="bg-green">
				<div className={`${styles.paddingX} ${styles.flexStart} mx-0 md:mx-16`}>
					<div className={`${styles.boxWidth}`}>
						<Gurantee />
					</div>
				</div>
			</div>
			<div className={`${styles.paddingX} ${styles.flexStart} mx-0 md:mx-16`}>
				<div className={`${styles.boxWidth}`}>
					<About />
				</div>
			</div>
			<div className="bg-slate-400 bg-opacity-30">
				<div className={`${styles.paddingX} ${styles.flexStart}`}>
					<div className={`${styles.boxWidth}`}>
						<Feedback />
					</div>
				</div>
				<div className={`${styles.paddingX} ${styles.flexStart}`}>
					<div className={`${styles.boxWidth}`}>
						<OrderForm />
					</div>
				</div>
			</div>
			<div className={`${styles.paddingX} ${styles.flexStart} mx-0 md:mx-16`}>
				<div className={`${styles.boxWidth}`}>
					<ProductPrice />
				</div>
			</div>
			<div className={`${styles.paddingX} ${styles.flexStart} mx-0 md:mx-16`}>
				<div className={`${styles.boxWidth}`}>
					<SupplementFact />
				</div>
			</div>
			<div className={`${styles.paddingX} ${styles.flexStart} mx-0 md:mx-16`}>
				<div className={`${styles.boxWidth}`}>
					<Cta />
				</div>
			</div>
			<div className="bg-[#311432]">
				<div className={`${styles.paddingX} ${styles.flexStart}`}>
					<div className={`${styles.boxWidth}`}>
						<Footer />
					</div>
				</div>
			</div>
		</main>
	);
}

// about us component
// order form component
// will send an email to process order and also place it in an admin list to show the online orders
// footer component

// colors to try
// #20B15A lemon green
// #00CA72 lighter green
// #F8FFF9 differnt shade of white
// #333333 different shade of black
// #F55F1D orange
// #77C589 shade of green