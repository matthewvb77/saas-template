import Link from "next/link";
import Login from "./Login";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function Hero() {
	return (
		<section className="w-full p-4 flex flex-col sm:flex-row justify-center sm:space-x-20 sm:space-y-0 space-y-10 items-center h-[80vh] bg-stone-500">
			<Card>
				<CardHeader>
					<h1 className="text-4xl">Here is the title!</h1>
				</CardHeader>
				<CardContent>
					<p className="text-lg">
						🥶 You can do{" "}
						<Link className="underline" href="#Feature1">
							super cool feature 1
						</Link>{" "}
						blah lbah
						<br />
						🥸 You can do{" "}
						<Link className="underline" href="#Feature2">
							super cool feature 2
						</Link>{" "}
						blah lbah asdf asdf asd f
						<br />
						🤌 You can do{" "}
						<Link className="underline" href="#Feature3">
							super cool feature 3
						</Link>{" "}
						blah lbah
					</p>
				</CardContent>
			</Card>
			<Login />
		</section>
	);
}
