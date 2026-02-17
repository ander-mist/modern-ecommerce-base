'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { Fragment } from 'react';

const labelMap: Record<string, string> = {
    admin: 'Admin',
    products: 'Products',
    orders: 'Orders',
    users: 'Users',
    profile: 'Profile',
    cart: 'Cart',
    checkout: 'Checkout',
    shipping: 'Shipping',
    payment: 'Payment',
    review: 'Review',
    search: 'Search',
    category: 'Categoria',
    create: 'Create',
    edit: 'Edit',
    ai: 'AI',
};

function formatSegment(segment: string): string {
    return labelMap[segment] || decodeURIComponent(segment);
}

export function Breadcrumbs() {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);

    if (segments.length === 0) return null;

    const breadcrumbs = segments.map((segment, index) => {
        const href = '/' + segments.slice(0, index + 1).join('/');
        const label = formatSegment(segment);
        const isLast = index === segments.length - 1;

        return { href, label, isLast };
    });

    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground py-4">
            <Link
                href="/"
                className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
                <Home className="h-3.5 w-3.5" />
                <span className="sr-only">Home</span>
            </Link>
            {breadcrumbs.map((crumb, index) => (
                <Fragment key={crumb.href}>
                    <ChevronRight className="h-3.5 w-3.5 shrink-0" />
                    {crumb.isLast ? (
                        <span className="font-medium text-foreground truncate max-w-[200px]">
                            {crumb.label}
                        </span>
                    ) : (
                        <Link
                            href={crumb.href}
                            className="hover:text-foreground transition-colors truncate max-w-[200px]"
                        >
                            {crumb.label}
                        </Link>
                    )}
                </Fragment>
            ))}
        </nav>
    );
}
