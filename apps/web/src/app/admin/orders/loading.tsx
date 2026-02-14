import { Skeleton } from '@/components/ui/skeleton';
import { Container } from '@/components/ui/container';

export default function AdminOrdersLoading() {
    return (
        <Container>
            <div className="max-w-7xl mx-auto py-10 space-y-6">
                <Skeleton className="h-8 w-48" />
                <div className="space-y-3">
                    <Skeleton className="h-12 w-full" />
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton key={i} className="h-16 w-full" />
                    ))}
                </div>
            </div>
        </Container>
    );
}
