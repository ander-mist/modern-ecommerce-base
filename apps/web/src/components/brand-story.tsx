import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export function BrandStory() {
    return (
        <section className="py-16">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Heart className="h-5 w-5 text-primary fill-primary" />
                        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                            Sobre a Dellua
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold leading-tight">
                        Beleza que inspira, <br />
                        <span className="bg-gradient-to-r from-[hsl(330,45%,32%)] to-[hsl(20,65%,52%)] bg-clip-text text-transparent">
                            qualidade que transforma
                        </span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        A Dellua Store nasceu da paixão pela maquiagem e do desejo de oferecer
                        produtos de alta qualidade a preços acessíveis. Trabalhamos com as melhores
                        marcas para que cada cliente se sinta única e poderosa.
                    </p>
                    <div className="flex gap-8 py-4">
                        <div>
                            <p className="text-3xl font-bold text-primary">500+</p>
                            <p className="text-sm text-muted-foreground">Clientes felizes</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary">20+</p>
                            <p className="text-sm text-muted-foreground">Produtos</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary">100%</p>
                            <p className="text-sm text-muted-foreground">Original</p>
                        </div>
                    </div>
                    <Link
                        href="/sobre"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                    >
                        Conheça nossa história
                        <span aria-hidden>→</span>
                    </Link>
                </div>

                {/* Visual Element */}
                <div className="relative">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-[hsl(330,45%,32%)] via-[hsl(350,40%,42%)] to-[hsl(20,65%,52%)] p-1">
                        <div className="h-full w-full rounded-2xl bg-card flex items-center justify-center relative overflow-hidden">
                            <Image
                                src="/images/logo_oficial_2.png"
                                alt="Dellua Store"
                                width={300}
                                height={300}
                                className="object-contain p-8 relative z-10"
                            />
                            {/* Decorative circles */}
                            <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-primary/5" />
                            <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-accent/5" />
                            <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-primary/3" />
                        </div>
                    </div>
                    {/* Floating accent */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent/20 blur-2xl" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-primary/20 blur-2xl" />
                </div>
            </div>
        </section>
    );
}
