import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import styles from '@/components/style';

export async function generateMetadata({ params }: { params: { id: string } }) {
	return {
		title: 'Organo max (OMAX)',
		description: '100% Organic Protein Powder (OMAX)',
	};
}

export default function page() {
	return (
		<main className={`w-full overflow-hidden h-15`}>
            <div className="bg-image">
            </div>
                <header
                    className={`${styles.paddingX} ${styles.flexCenter} mx-0 sm:mx-16`}
                >
                    <div className={`${styles.boxWidth}`}>
                        <Navbar />
                    </div>
                </header>

                <div className={`${styles.flexStart} ${styles.marginX} px-0 sm:px-16`}>
                    <div className={`${styles.boxWidth}`}>
                        <Hero />
                    </div>
                </div>
		</main>
	);
}
