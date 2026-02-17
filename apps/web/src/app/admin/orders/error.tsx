'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { AlertCircle } from 'lucide-react';

export default function AdminOrdersError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <Container>
            <div className="max-w-7xl mx-auto py-10 flex flex-col items-center justify-center gap-4 text-center">
                <AlertCircle className="h-12 w-12 text-destructive" />
                <h2 className="text-2xl font-semibold">Failed to load orders</h2>
                <p className="text-muted-foreground max-w-md">
                    {error.message || 'Something went wrong while loading orders.'}
                </p>
                <Button onClick={reset} variant="outline">
                    Try Again
                </Button>
            </div>
        </Container>
    );
}
