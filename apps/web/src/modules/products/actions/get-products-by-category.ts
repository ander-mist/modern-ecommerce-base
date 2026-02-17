'use server';

import { fetchWithAuth } from '@/lib/fetch-with-auth';
import type { PaginatedResponse, Product } from '@apps/shared/types';

export async function getProductsByCategory(
    category: string,
    page: number = 1,
    limit: number = 10,
): Promise<PaginatedResponse<Product>> {
    try {
        const searchParams = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
            category: encodeURIComponent(category),
        });

        const response = await fetchWithAuth(
            `/products?${searchParams.toString()}`,
        );

        if (!response.ok) {
            throw new Error('Failed to fetch products by category');
        }

        return (await response.json()) as PaginatedResponse<Product>;
    } catch (error) {
        console.error('Error fetching products by category:', error);
        return {
            items: [],
            total: 0,
            page: 1,
            pages: 1,
        };
    }
}
