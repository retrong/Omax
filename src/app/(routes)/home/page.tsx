export async function generateMetadata({ params }: { params: { id: string } }) {
	return {
		title: 'Organo max (OMAX)',
		description: '100% Organic Protein Powder (OMAX)',
	};
}

import Navbar from '@/components/Navbar';
import styles from '@/components/style';

export default function page() {
	return (
		<main className={`w-full overflow-hidden h-15`}>
			<div
				className={`${styles.paddingX} ${styles.flexCenter} ${styles.marginX}`}
			>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>

			<div>
				<div></div>
			</div>
		</main>
	);
}
