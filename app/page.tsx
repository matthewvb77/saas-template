import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Feature1Example from "@/components/Feature1Example";
import Feature2Example from "@/components/Feature2Example";
import Feature3Example from "@/components/Feature3Example";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Header />
			<main className="flex flex-col items-center ">
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
