import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Feature1Example from "@/components/Feature1Example";
import Feature2Example from "@/components/Feature2Example";
import Feature3Example from "@/components/Feature3Example";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<Header />
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<Hero />

				<Feature1Example />
				<Feature2Example />
				<Feature3Example />

				<Pricing />
			</main>
			<Footer />
		</div>
	);
}
