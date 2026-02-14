import Link from 'next/link';
import { CATEGORIES } from '@/config/categories';

export function CategoryGrid() {
    return (
        <section className="py-10">
            <h2 className="text-2xl font-bold mb-6">Categorias</h2>
            <div className="grid grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {CATEGORIES.map((category) => {
                    const Icon = category.icon;
                    return (
                        <Link
                            key={category.slug}
                            href={`/category/${encodeURIComponent(category.slug)}`}
                            className="group flex flex-col items-center gap-3 rounded-xl border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                                <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-center">
                                {category.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
