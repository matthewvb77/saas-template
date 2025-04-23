import Link from "next/link";
import Image from "next/image";

export default function Header() {
	return (
		<header className="w-full sticky top-0 bg-transparent h-20 flex justify-between items-center sm:px-12 px-6">
			<div className="flex items-center justify-center space-x-4">
				{" "}
				<Image
					src="/logo.png"
					width="32"
					height="32"
					alt="TODO: Your Logo"
				></Image>
				<h2 className="sm:text-xl text-lg font-semibold">Sick Logo</h2>
			</div>
			<nav className="space-x-6">
				<Link className="sm:text-lg text-base" href={"#Pricing"}>
					Pricing
				</Link>
				<Link className="sm:text-lg text-base" href={"#FAQ"}>
					FAQ
				</Link>
				<Link className="sm:text-lg text-base" href={"#Login"}>
					Log in
				</Link>
			</nav>
		</header>
	);
}
