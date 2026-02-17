'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES } from '@/config/categories';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export function CategoryGrid() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
        dragFree: true,
    });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <section className="py-10">
            <div className="flex items-center justify-center mb-6">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">Categorias</h1>
                </div>
            </div>
            <div className="flex gap-2 justify-end">
                <button
                    onClick={scrollPrev}
                    className="flex h-9 w-9 items-center justify-center rounded-full border bg-card transition-colors hover:bg-primary/10 hover:border-primary/50 disabled:opacity-30"
                    disabled={!canScrollPrev}
                    aria-label="Anterior"
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                    onClick={scrollNext}
                    className="flex h-9 w-9 items-center justify-center rounded-full border bg-card transition-colors hover:bg-primary/10 hover:border-primary/50 disabled:opacity-30"
                    disabled={!canScrollNext}
                    aria-label="Próximo"
                >
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4 p-4">
                    {CATEGORIES.map((category) => {
                        const isImageIcon = typeof category.icon === 'string';
                        return (
                            <div
                                key={category.slug}
                                className="flex-[0_0_calc(100%/6)] lg:flex-[0_0_25%] md:flex-[0_0_33.333%] sm:flex-[0_0_50%] min-w-0"
                            >
                                <Link
                                    href={`/category/${encodeURIComponent(category.slug)}`}
                                    // className="group flex flex-col items-center gap-3 rounded-xl border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5"
                                    className="group flex flex-col items-center gap-3 rounded-xl border bg-card p-5 transition-all hover:border-primary/50 duration-300 hover:shadow-lg hover:-translate-x-2 hover:scale-105"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                                        {isImageIcon ? (
                                            <Image
                                                src={category.icon as string}
                                                alt={category.label}
                                                width={24}
                                                height={24}
                                            />
                                        ) : (
                                            (() => {
                                                const Icon = category.icon as React.ComponentType<{ className?: string }>;
                                                return <Icon className="h-6 w-6 text-primary" />;
                                            })()
                                        )}
                                    </div>
                                    <span className="text-sm font-medium text-center">
                                        {category.label}
                                    </span>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
