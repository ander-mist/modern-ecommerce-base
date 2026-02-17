import { Truck, ShieldCheck, Sparkles } from 'lucide-react';

export function PromoBanner() {
    return (
        <section className="py-6">
            <div className="rounded-2xl bg-gradient-to-r from-[hsl(330,45%,32%)] via-[hsl(350,40%,42%)] to-[hsl(20,65%,52%)] p-8 text-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 grid grid-cols-3 md:grid-cols-1 gap-6 text-center">
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                            <Truck className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="font-bold text-lg">Frete Grátis</p>
                            <p className="text-sm text-white/80">Em compras acima de R$150</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                            <ShieldCheck className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="font-bold text-lg">Compra Segura</p>
                            <p className="text-sm text-white/80">Pagamento 100% protegido</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                            <Sparkles className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="font-bold text-lg">Produtos Originais</p>
                            <p className="text-sm text-white/80">Garantia de autenticidade</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
