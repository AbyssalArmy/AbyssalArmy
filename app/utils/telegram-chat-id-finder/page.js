'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Copy } from "lucide-react";
import Link from "next/link";
import { prefix } from '@/prefix';

export default function TelegramChatIdFinder() {
    const [token, setToken] = useState('');
    const [updates, setUpdates] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getUpdates = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
            const data = await response.json();
            if (data.ok) {
                setUpdates(data.result);
            } else {
                setError(data.description);
            }
        } catch (err) {
            setError('An error occurred while fetching updates.');
        }
        setLoading(false);
    };

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
                        <Link href="/utils" className="flex items-center text-gray-300 hover:text-white transition-colors">
                            <ArrowLeft className="h-5 w-5 mr-2" />
                            Back to Utilities
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-center mb-12">Telegram Chat ID Finder</h1>
                    <div className="max-w-2xl mx-auto">
                        <Card className="bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-white">Find Your Chat ID</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-4">
                                    <p className="text-gray-400">Enter your Telegram Bot Token below to get the latest updates and find your chat ID.</p>
                                    <div className="flex gap-2">
                                        <Input
                                            type="text"
                                            placeholder="Your Telegram Bot Token"
                                            value={token}
                                            onChange={(e) => setToken(e.target.value)}
                                            className="bg-white/10 border-white/20 text-white placeholder-gray-500"
                                        />
                                        <Button onClick={getUpdates} disabled={loading || !token} className="bg-white/10 hover:bg-white/20">
                                            {loading ? 'Loading...' : <><Search className="h-5 w-5 mr-2" /> Find</>}
                                        </Button>
                                    </div>
                                    {error && <p className="text-red-500">{error}</p>}
                                </div>
                            </CardContent>
                        </Card>

                        {updates && (
                            <Card className="bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg mt-8">
                                <CardHeader>
                                    <CardTitle className="text-white">Results</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {updates.length > 0 ? (
                                        <div className="space-y-4">
                                            {updates.map(update => (
                                                <UpdateCard key={update.update_id} update={update} />
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-gray-400">No recent messages found. Send a message to your bot and try again.</p>
                                    )}
                                </CardContent>
                            </Card>
                        )}
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

function UpdateCard({ update }) {
    const chat = update.message?.chat || update.channel_post?.chat;
    const from = update.message?.from;
    const text = update.message?.text || update.channel_post?.text;

    if (!chat) {
        return null;
    }

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="bg-black/20 p-4 rounded-md">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-lg font-semibold text-white">{chat.title || `${chat.first_name} ${chat.last_name || ''}`}</p>
                    {chat.username && <p className="text-sm text-gray-400">@{chat.username}</p>}
                </div>
                <div className="text-right">
                    <p className="text-sm text-gray-400 capitalize">{chat.type} Chat</p>
                </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <p className="text-lg text-white font-mono bg-black/30 px-2 py-1 rounded">
                    {chat.id}
                </p>
                <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/20"
                    onClick={() => copyToClipboard(chat.id)}
                >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy ID
                </Button>
            </div>
            {text && (
                <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-sm text-gray-400">Last message from {from.first_name}:</p>
                    <p className="text-white italic">"{text}"</p>
                </div>
            )}
        </div>
    );
}