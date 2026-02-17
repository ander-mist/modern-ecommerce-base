import { Container } from '@/components/ui/container';
import { ProductGrid } from '@/modules/products/components/product-grid';
import { getProducts } from '@/modules/products/actions/get-products';
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
import { HeroSlider } from '@/components/hero-slider';
import { CategoryGrid } from '@/components/category-grid';
import { Bestsellers } from '@/components/bestsellers';
import { PromoBanner } from '@/components/promo-banner';
import { BrandStory } from '@/components/brand-story';
import { Badge } from '@/components/ui/badge';

interface HomePageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function Home({ searchParams }: HomePageProps) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const { items: products, pages } = await getProducts(currentPage, 10);

  const visiblePages = getVisiblePages(currentPage, pages);

  return (
    <>
      {currentPage === 1 && <HeroSlider />}
      <Container className="mt-10">
        {currentPage === 1 && (
          <>
            <CategoryGrid />
            <PromoBanner />
            <Bestsellers />
          </>
        )}
        <div className="space-y-10 pb-10">
          <div id="products" className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2 justify-center items-center">
              <h1 className="text-3xl font-bold">Novidades</h1>
              <Badge variant="brand">Confira nossas ofertas</Badge>
            </div>
            <ProductGrid products={products} />
            <div className="flex justify-center mt-8">
              {pages > 1 && (
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href={`/?page=${currentPage - 1}`}
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
                            href={`/?page=${pageNum}`}
                            isActive={currentPage === pageNum}
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      ),
                    )}

                    <PaginationItem>
                      <PaginationNext
                        href={`/?page=${currentPage + 1}`}
                        isActive={currentPage < pages}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </div>
          </div>
        </div>
        {currentPage === 1 && <BrandStory />}
      </Container>
    </>
  );
}
