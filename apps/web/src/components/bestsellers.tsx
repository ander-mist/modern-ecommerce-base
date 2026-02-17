import { getProducts } from '@/modules/products/actions/get-products';
import { ProductCard } from '@/modules/products/components/product-card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

export async function Bestsellers() {
    const { items } = await getProducts(1, 20);

    const topRated = [...items]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

    if (topRated.length === 0) return null;

    return (
        <section className="py-10">
            <div className="flex flex-col items-center gap-2 mb-8">
                <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <h2 className="text-2xl font-bold">Mais Vendidos</h2>
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <Badge variant="brand">Os favoritos das nossas clientes</Badge>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {topRated.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </section>
    );
}
