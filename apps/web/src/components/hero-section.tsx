'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/50">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border bg-background/80 backdrop-blur px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm">
                            <Zap className="h-3.5 w-3.5 text-yellow-500" />
                            New arrivals every week
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-6 text-5xl font-bold tracking-tight sm:text-4xl md:text-3xl"
                    >
                        Premium Electronics,{' '}
                        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Best Prices
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-base"
                    >
                        Discover the latest in technology. From smartphones to laptops,
                        find everything you need with free shipping on orders over $100.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-8 flex flex-wrap items-center justify-center gap-4"
                    >
                        <Button size="lg" asChild>
                            <Link href="/#products">
                                Shop Now
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/search/featured">Browse All</Link>
                        </Button>
                    </motion.div>

                    {/* Features strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-12 grid grid-cols-3 gap-8 sm:gap-4 sm:grid-cols-1"
                    >
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                <Truck className="h-5 w-5 text-primary" />
                            </div>
                            <div className="text-left">
                                <p className="font-medium text-foreground">Free Shipping</p>
                                <p className="text-xs">On orders over $100</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                <Shield className="h-5 w-5 text-primary" />
                            </div>
                            <div className="text-left">
                                <p className="font-medium text-foreground">Secure Payment</p>
                                <p className="text-xs">PayPal & Stripe</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                <Zap className="h-5 w-5 text-primary" />
                            </div>
                            <div className="text-left">
                                <p className="font-medium text-foreground">AI-Powered</p>
                                <p className="text-xs">Smart product search</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
