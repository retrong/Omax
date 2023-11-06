import About from '@/components/About';
import Features from '@/components/Features';
import Feedback from '@/components/Feedback';
import Footer from '@/components/Footer';
import Gurantee from '@/components/Gurantee';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import OrderForm from '@/components/OrderForm';
import ProductPrice from '@/components/ProductPrice';
import Stats from '@/components/Stats';
import SupplementFact from '@/components/SupplementFact';
import styles from '@/components/style';

export async function generateMetadata({ params }: { params: { id: string } }) {
	return {
		title: 'Organo max (OMAX)',
		description: '100% Organic Protein Powder (OMAX)',
	};
}

export default function Home() {
	return (
		<main className={`w-full overflow-hidden h-15`}>
			<div className="bg-image"></div>
			<header className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</header>

			<div className={`${styles.flexStart} ${styles.marginX} px-0 md:px-16`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>

			<div className="bg-green max-h-[20%]">
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

			<div className="bg-green bg-opacity-30">
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
				<div className={`${styles.paddingX} ${styles.flexStart} mx-0 md:mx-16`}>
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
			<div className="bg-secondary">
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