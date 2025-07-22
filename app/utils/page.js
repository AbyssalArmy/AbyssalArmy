import { Card, CardContent } from "@/components/ui/card";
import { prefix } from "@/prefix";
import { ArrowLeft, Terminal } from "lucide-react";
import Link from "next/link";

const utils = [
	{
		title: "Telegram Chat ID finder",
		description: "Find your Telegram chat ID easily with this tool.",
		category: "Telegram Utilities",
		slug: "telegram-chat-id-finder"
	}
];

export default function UtilsPage() {
	return (
		<div className="min-h-screen bg-black text-white flex flex-col">
			{/* Header */}
			<header className="sticky top-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center">
							<Link href="/" className="flex items-center">
								<img src={`${prefix}/abyssal.jpg`} alt="Abyssal Army Logo" width="32" height="32" className="rounded-full" />
								<span className="ml-3 text-xl font-semibold">Abyssal Army</span>
							</Link>
						</div>
						<Link href="/" className="flex items-center text-gray-300 hover:text-white transition-colors">
							<ArrowLeft className="h-5 w-5 mr-2" />
							Back to Home
						</Link>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="flex-grow py-12">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl font-bold tracking-tight text-center mb-12">Tools & Utilities</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{utils.map((util, index) => (
							<UtilCard key={index} util={util} />
						))}
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="bg-black/30 border-t border-white/10 py-8 mt-12">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
					&copy; {new Date().getFullYear()} Abyssal Army.
				</div>
			</footer>
		</div>
	);
}

function UtilCard({ util }) {
	return (
		<Card className="bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg hover:shadow-2xl hover:border-white/20 transition-all duration-300 rounded-2xl">
			<CardContent className="px-8 py-2">
				<div className="flex justify-between items-start mb-4">
					<h3 className="text-2xl font-bold text-white">{util.title}</h3>
					<span className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full">{util.category}</span>
				</div>
				<p className="text-gray-400 mb-4">{util.description}</p>
				<Link href={`/utils/${util.slug}`} className="inline-flex items-center text-white hover:text-gray-300 font-semibold">
					<Terminal className="h-5 w-5 mr-2" />
					Launch Tool
				</Link>
			</CardContent>
		</Card>
	)
}
