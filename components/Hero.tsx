import Link from "next/link";
import Login from "./Login";

export default function Hero() {
	return (
		<section className="w-full flex justify-center space-x-20 items-center h-[80vh] bg-stone-500">
			<div className="bg-orange-400 h-60 w-72">
				<h1 className="text-4xl">Here is the title!</h1>
				<p>
					You can do{" "}
					<Link className="underline" href="#Feature1">
						super cool feature 1
					</Link>{" "}
					blah lbah
				</p>
				<p>
					You can do{" "}
					<Link className="underline" href="#Feature2">
						super cool feature 2
					</Link>{" "}
					blah lbah
				</p>
				<p>
					You can do{" "}
					<Link className="underline" href="#Feature3">
						super cool feature 3
					</Link>{" "}
					blah lbah
				</p>
			</div>
			<Login />
		</section>
	);
}
