import {
    Palette,
    Heart,
    Eye,
    Sparkles,
    Droplets,
    CircleDot,
    PenTool,
    Layers,
    Gem,
    Brush,
    Scissors,
    Wind,
    PencilLine,
    Cherry,
    LayoutGrid,
    Sun,
    Eraser,
    type LucideIcon,
} from 'lucide-react';

export interface CategoryConfig {
    slug: string;
    label: string;
    icon: LucideIcon;
}

export const CATEGORIES: CategoryConfig[] = [
    { slug: 'Base', label: 'Base', icon: Droplets },
    { slug: 'Batom', label: 'Batom', icon: Heart },
    { slug: 'Sombra', label: 'Sombra', icon: Eye },
    { slug: 'Máscara de Cílios', label: 'Máscara', icon: Sparkles },
    { slug: 'Corretivo', label: 'Corretivo', icon: CircleDot },
    { slug: 'Pó', label: 'Pó', icon: Palette },
    { slug: 'Blush', label: 'Blush', icon: Cherry },
    { slug: 'Delineador', label: 'Delineador', icon: PenTool },
    { slug: 'Primer', label: 'Primer', icon: Layers },
    { slug: 'Iluminador', label: 'Iluminador', icon: Gem },
    { slug: 'Acessórios', label: 'Acessórios', icon: Brush },
    { slug: 'Contorno', label: 'Contorno', icon: Scissors },
    { slug: 'Fixador', label: 'Fixador', icon: Wind },
    { slug: 'Sobrancelha', label: 'Sobrancelha', icon: PencilLine },
    { slug: 'Gloss', label: 'Gloss', icon: Sparkles },
    { slug: 'Paleta', label: 'Paleta', icon: LayoutGrid },
    { slug: 'BB Cream', label: 'BB Cream', icon: Sun },
    { slug: 'Demaquilante', label: 'Demaquilante', icon: Eraser },
];

export function getCategoryBySlug(slug: string): CategoryConfig | undefined {
    return CATEGORIES.find(
        (c) => c.slug.toLowerCase() === decodeURIComponent(slug).toLowerCase(),
    );
}
