import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';

const footerLinks = {
    shop: [
        { label: 'All Products', href: '/' },
        { label: 'New Arrivals', href: '/' },
        { label: 'Top Rated', href: '/' },
    ],
    account: [
        { label: 'My Profile', href: '/profile' },
        { label: 'Order History', href: '/profile/orders' },
        { label: 'Shopping Cart', href: '/cart' },
    ],
    support: [
        { label: 'Contact Us', href: '#' },
        { label: 'Shipping Policy', href: '#' },
        { label: 'Returns & Refunds', href: '#' },
    ],
};

export function Footer() {
    return (
        <footer className="border-t bg-muted/30">
            <Container>
                <div className="py-12 grid grid-cols-4 gap-8 md:grid-cols-2 sm:grid-cols-1">
                    {/* Brand */}
                    <div className="space-y-3">
                        <Link href="/" className="font-bold text-xl">
                            <Image src="/images/logo_oficial.png" alt="Logo" width={50} height={50} />
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Your trusted destination for premium electronics at the best
                            prices. Powered by AI for a smarter shopping experience.
                        </p>
                    </div>

                    {/* Shop */}
                    <div>
                        <h3 className="font-semibold mb-3">Shop</h3>
                        <ul className="space-y-2">
                            {footerLinks.shop.map(link => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Account */}
                    <div>
                        <h3 className="font-semibold mb-3">Account</h3>
                        <ul className="space-y-2">
                            {footerLinks.account.map(link => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold mb-3">Support</h3>
                        <ul className="space-y-2">
                            {footerLinks.support.map(link => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Separator />

                <div className="py-6 flex items-center justify-between text-sm text-muted-foreground sm:flex-col sm:gap-2">
                    <p>&copy; {new Date().getFullYear()} Elecshop. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
