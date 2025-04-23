import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
	return (
		<header className="w-full bg-blue-500 h-20 flex justify-between items-center px-12">
			<div className="text-xl">Sick Logo</div>
			<nav className="space-x-6">
				<Link className="text-lg" href={"#Pricing"}>
					Pricing
				</Link>
				<Link className="text-lg" href={"#Faq"}>
					FAQ
				</Link>
				<Button>
					<Link className="text-lg" href={"#Login"}>
						Log in
					</Link>
				</Button>
			</nav>
		</header>
	);
}
