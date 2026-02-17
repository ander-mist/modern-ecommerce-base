'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Slide {
    id: number;
    badge: string;
    title: string;
    highlight: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    bgGradient: string;
    accentColor: string;
}

const slides: Slide[] = [
    {
        id: 1,
        badge: '✨ Novidades',
        title: 'Maquiagem que',
        highlight: 'Transforma',
        description:
            'Descubra nossa coleção completa de maquiagens com alta pigmentação, longa duração e acabamentos incríveis.',
        ctaText: 'Ver Coleção',
        ctaHref: '/#products',
        bgGradient: 'from-[hsl(330,45%,32%)] via-[hsl(330,40%,22%)] to-[hsl(340,35%,18%)]',
        accentColor: 'text-orange-300',
    },
    {
        id: 2,
        badge: '🎁 Frete Grátis',
        title: 'Batons com até',
        highlight: '16h de duração',
        description:
            'Cores intensas que não transferem. Fórmula confortável com acabamento matte ou cremoso. Frete grátis em pedidos acima de R$100.',
        ctaText: 'Ver Batons',
        ctaHref: '/category/Batom',
        bgGradient: 'from-[hsl(20,60%,35%)] via-[hsl(15,55%,28%)] to-[hsl(10,50%,20%)]',
        accentColor: 'text-rose-300',
    },
    {
        id: 3,
        badge: '💄 Best Sellers',
        title: 'Paletas e Sombras',
        highlight: 'Premium',
        description:
            'Do nude ao glam em segundos. Paletas com texturas matte, shimmer e glitter para criar looks ilimitados.',
        ctaText: 'Ver Paletas',
        ctaHref: '/category/Sombra',
        bgGradient: 'from-[hsl(280,30%,25%)] via-[hsl(300,25%,20%)] to-[hsl(320,30%,18%)]',
        accentColor: 'text-pink-300',
    },
    {
        id: 4,
        badge: '🧴 Skincare + Makeup',
        title: 'Prepare a pele com',
        highlight: 'Primers & BB Cream',
        description:
            'Produtos que cuidam da pele enquanto preparam a make perfeita. Com vitamina C, FPS e ação antioxidante.',
        ctaText: 'Ver Primers',
        ctaHref: '/category/Primer',
        bgGradient: 'from-[hsl(25,40%,30%)] via-[hsl(20,35%,24%)] to-[hsl(15,30%,18%)]',
        accentColor: 'text-amber-300',
    },
];

export function HeroSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
    ]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback(
        (index: number) => emblaApi?.scrollTo(index),
        [emblaApi],
    );

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on('select', onSelect);
        onSelect();

        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi]);

    return (
        <section className="relative group">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {slides.map((slide) => (
                        <div key={slide.id} className="flex-[0_0_100%] min-w-0">
                            <div
                                className={cn(
                                    'relative bg-gradient-to-br py-20 lg:py-28 px-6',
                                    slide.bgGradient,
                                )}
                            >
                                {/* Decorative blurs */}
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
                                    <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
                                </div>

                                <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
                                    {/* Badge */}
                                    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 text-sm font-medium text-white/90">
                                        {slide.badge}
                                    </span>

                                    {/* Heading */}
                                    <h2 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-4xl md:text-3xl">
                                        {slide.title}{' '}
                                        <span className={slide.accentColor}>
                                            {slide.highlight}
                                        </span>
                                    </h2>

                                    {/* Description */}
                                    <p className="mt-4 max-w-2xl text-lg text-white/75 sm:text-base">
                                        {slide.description}
                                    </p>

                                    {/* CTA */}
                                    <div className="mt-8">
                                        <Button
                                            size="lg"
                                            variant="secondary"
                                            asChild
                                            className="bg-white text-gray-900 hover:bg-white/90"
                                        >
                                            <Link href={slide.ctaHref}>
                                                {slide.ctaText}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation arrows */}
            <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/30"
                aria-label="Slide anterior"
            >
                <ChevronLeft className="h-5 w-5" />
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/30"
                aria-label="Próximo slide"
            >
                <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => scrollTo(index)}
                        className={cn(
                            'h-2 rounded-full transition-all duration-300',
                            selectedIndex === index
                                ? 'w-8 bg-white'
                                : 'w-2 bg-white/40 hover:bg-white/60',
                        )}
                        aria-label={`Ir para slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
