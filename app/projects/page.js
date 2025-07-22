import { Card, CardContent } from "@/components/ui/card";
import { prefix } from "@/prefix";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";

const projects = [
	{
		title: "ContactEye",
		description: "Easy-to-use and lightweight tool for monitoring contacts and call logs on Android devices.",
		tags: ["Android", "Spyware", "Security"],
		link: "https://github.com/AbyssalArmy/ContactEye",
		stars: 15
	},
	{
		title: "GalleryEye",
		description: "Android gallery spyware",
		tags: ["Android", "Spyware", "Security"],
		link: "https://github.com/AbyssalArmy/GalleryEye",
		stars: 304
	},
	{
		title: "LocationEye",
		description: "LocationEye is a powerful Android malware designed to track a device's location",
		tags: ["Android", "Malware", "Security"],
		link: "https://github.com/AbyssalArmy/LocationEye",
		stars: 100
	},
	{
		title: "PlotuRat",
		description: "Advanced phishing software designed specifically for Android devices.",
		tags: ["Android", "Phishing", "Security"],
		link: "https://github.com/AbyssalArmy/PlotuRat",
		stars: 25
	},
	{
		title: "SmsEye",
		description: "Android SMS spyware",
		tags: ["Android", "Spyware", "Security"],
		link: "https://github.com/AbyssalArmy/SmsEye",
		stars: 372
	},
	{
		title: "SmsEye2",
		description: "SmsEye2 is an app that allows users to forward SMS messages from a target device to a Telegram bot.",
		tags: ["Android", "Spyware", "Telegram"],
		link: "https://github.com/AbyssalArmy/SmsEye2",
		stars: 122
	},
	{
		title: "SmsEye3",
		description: "Access android devices incoming SMS messages",
		tags: ["Android", "Spyware", "Security"],
		link: "https://github.com/AbyssalArmy/SmsEye3",
		stars: 81
	},
	{
		title: "ZenRat",
		description: "Advanced and powerful Android device controlling tool with a wide range of features and capabilities",
		tags: ["Android", "RAT", "Security"],
		link: "https://github.com/AbyssalArmy/ZenRat",
		stars: 236
	}
];

export default function ProjectsPage() {
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
					<h1 className="text-4xl font-bold tracking-tight text-center mb-12">Our Projects</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{projects.map((project, index) => (
							<ProjectCard key={index} project={project} />
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

function ProjectCard({ project }) {
	return (
		<Link href={project.link} target="_blank" rel="noopener noreferrer">
			<Card className="bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg hover:shadow-2xl hover:border-white/20 transition-all duration-300 rounded-2xl h-full">
				<CardContent className="px-8 py-2">
					<div className="flex justify-between items-start">
						<h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
						<div className="flex items-center text-white">
							<Star className="h-5 w-5 mr-1" />
							<span>{project.stars}</span>
						</div>
					</div>
					<p className="text-gray-400 mb-4">{project.description}</p>
					<div className="flex flex-wrap gap-2">
						{project.tags.map((tag, index) => (
							<span key={index} className="bg-white/10 text-white/80 text-xs font-semibold px-2.5 py-1 rounded-full">
								{tag}
							</span>
						))}
					</div>
				</CardContent>
			</Card>
		</Link>
	)
}
