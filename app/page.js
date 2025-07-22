import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Code, Server, ArrowRight, Github, Send } from "lucide-react";
import Link from "next/link";
import { prefix } from "@/prefix";


export default function LandingPage() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <img src={`${prefix}/abyssal.jpg`} alt="Abyssal Army Logo" width="32" height="32" className="rounded-full" />
                            <span className="ml-3 text-xl font-semibold">Abyssal Army</span>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ml-8 space-x-4">
                                <Link href="https://github.com/AbyssalArmy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                    <Github className="h-6 w-6" />
                                </Link>
                                <Link href="https://t.me/AbyssalArmyBackup" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                    <Send className="h-6 w-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="py-12">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-snug text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                            We Are Abyssal Army
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                            AbyssalArmy crafts privacy-focused tools, reverse engineering workflows, and self-hosted infrastructure for power users and developers.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pb-12">
                        <PortalCard
                            href="/projects"
                            title="Our Projects"
                            description="Explore our portfolio of cybersecurity projects and spywares."
                            icon={<Code className="h-10 w-10 text-white" />}
                        />
                        <PortalCard
                            href="/utils"
                            title="Tools & Utilities"
                            description="Access a suite of tools and utilities for ethical hacking and security analysis."
                            icon={<Server className="h-10 w-10 text-white" />}
                        />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-black/30 border-t border-white/10 py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
                    &copy; {new Date().getFullYear()} Abyssal Army.
                </div>
            </footer>
        </div>
    );
}

function PortalCard({ href, icon, title, description }) {
    return (
        <Link href={href} className="block group">
            <Card className="bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg hover:shadow-2xl hover:border-white/20 transition-all duration-300 rounded-2xl h-full">
                <CardContent className="p-8 text-center flex flex-col items-center justify-between h-full">
                    <div>
                        <div className="inline-block bg-white/10 p-4 rounded-full mb-6 group-hover:bg-white/20 transition-colors">
                            {icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
                        <p className="text-gray-400">{description}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors">
                        <span>Explore</span>
                        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}