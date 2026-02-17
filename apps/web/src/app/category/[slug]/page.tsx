import { Container } from '@/components/ui/container';
import { ProductGrid } from '@/modules/products/components/product-grid';
import { getProductsByCategory } from '@/modules/products/actions/get-products-by-category';
import { getCategoryBySlug } from '@/config/categories';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    PaginationEllipsis,
} from '@/components/ui/pagination';
import { getVisiblePages } from '@/lib/utils';

interface CategoryPageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ page?: string }>;
}

export default async function CategoryPage({
    params,
    searchParams,
}: CategoryPageProps) {
    const { slug } = await params;
    const { page } = await searchParams;
    const currentPage = Number(page) || 1;
    const decodedSlug = decodeURIComponent(slug);

    const category = getCategoryBySlug(decodedSlug);
    const categoryName = category?.label ?? decodedSlug;

    const { items: products, pages } = await getProductsByCategory(
        decodedSlug,
        currentPage,
        12,
    );

    const visiblePages = getVisiblePages(currentPage, pages);

    return (
        <Container className="mt-6">
            <Breadcrumbs />

            <div className="space-y-8 pb-10">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/">
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold">{categoryName}</h1>
                        <p className="text-muted-foreground text-sm mt-1">
                            {products.length > 0
                                ? `Exibindo produtos da categoria "${categoryName}"`
                                : `Nenhum produto encontrado na categoria "${categoryName}"`}
                        </p>
                    </div>
                </div>

                <ProductGrid products={products} />

                {pages > 1 && (
                    <div className="flex justify-center mt-8">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious
                                        href={`/category/${slug}?page=${currentPage - 1}`}
                                        isActive={currentPage > 1}
                                    />
                                </PaginationItem>

                                {visiblePages.map((pageNum, idx) =>
                                    pageNum === null ? (
                                        <PaginationItem key={`ellipsis-${idx}`}>
                                            <PaginationEllipsis />
                                        </PaginationItem>
                                    ) : (
                                        <PaginationItem key={pageNum}>
                                            <PaginationLink
                                                href={`/category/${slug}?page=${pageNum}`}
                                                isActive={currentPage === pageNum}
                                            >
                                                {pageNum}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ),
                                )}

                                <PaginationItem>
                                    <PaginationNext
                                        href={`/category/${slug}?page=${currentPage + 1}`}
                                        isActive={currentPage < pages}
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                )}
            </div>
        </Container>
    );
}
