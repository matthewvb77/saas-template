import { LucideCopyright } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
export default function Footer() {
	return (
		<footer className="w-full flex flex-col sm:flex-row sm:space-y-0 space-y-10 p-8 bg-stone-300 items-center justify-between">
			<div className="flex flex-col sm:items-start items-center space-y-4">
				<div className="flex items-center space-x-4">
					<Image
						src="/logo.png"
						width="32"
						height="32"
						alt="TODO: Your Logo"
					></Image>
					<h2 className="text-xl">Sick Logo</h2>
				</div>
				<div className="flex items-center space-x-1">
					<LucideCopyright size="16" />{" "}
					<p className="text-sm">Copyright 2025 - All rights reserved</p>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row sm:space-y-0 space-y-10 mx-auto space-x-10">
				<nav className="flex flex-col w-64 items-start">
					<h3 className="px-4 text-lg font-semibold">Pages</h3>
					<Link
						href=""
						className={`${buttonVariants({ variant: "link" })} w-fit`}
					>
						page1
					</Link>
					<Link
						href=""
						className={`${buttonVariants({ variant: "link" })} w-fit`}
					>
						page2
					</Link>
					<Link
						href=""
						className={`${buttonVariants({ variant: "link" })} w-fit`}
					>
						page3
					</Link>
					<Link
						href=""
						className={`${buttonVariants({ variant: "link" })} w-fit`}
					>
						page4
					</Link>
				</nav>
				<nav className="flex flex-col w-64">
					<h3 className="px-4 text-lg font-semibold">Links</h3>
					<Link
						href=""
						className={`${buttonVariants({ variant: "link" })} w-fit`}
					>
						link1
					</Link>
					<Link
						href=""
						className={`${buttonVariants({ variant: "link" })} w-fit`}
					>
						link2
					</Link>
					<Link
						href=""
						className={`${buttonVariants({ variant: "link" })} w-fit`}
					>
						link3
					</Link>
					<Link
						href=""
						className={`${buttonVariants({ variant: "link" })} w-fit`}
					>
						link4
					</Link>
				</nav>
			</div>
		</footer>
	);
}
