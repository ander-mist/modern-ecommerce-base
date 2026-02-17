'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/modules/cart/context/cart-context';

interface CheckoutContextType {
  shippingAddress: ShippingAddress | null;
  paymentMethod: string | null;
  setShippingAddress: (address: ShippingAddress) => void;
  setPaymentMethod: (method: string) => void;
  clearCheckout: () => void;
}

export interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

const CHECKOUT_STORAGE_KEY = 'checkout_data';

const CheckoutContext = createContext<CheckoutContextType | null>(null);

function loadFromStorage(): {
  shippingAddress: ShippingAddress | null;
  paymentMethod: string | null;
} {
  if (typeof window === 'undefined') {
    return { shippingAddress: null, paymentMethod: null };
  }
  try {
    const stored = localStorage.getItem(CHECKOUT_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        shippingAddress: parsed.shippingAddress || null,
        paymentMethod: parsed.paymentMethod || null,
      };
    }
  } catch {
    // ignore parse errors
  }
  return { shippingAddress: null, paymentMethod: null };
}

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [shippingAddress, setShippingAddressState] =
    useState<ShippingAddress | null>(null);
  const [paymentMethod, setPaymentMethodState] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);

  // Load persisted data on mount
  useEffect(() => {
    const stored = loadFromStorage();
    setShippingAddressState(stored.shippingAddress);
    setPaymentMethodState(stored.paymentMethod);
    setInitialized(true);
  }, []);

  // Persist to localStorage whenever values change
  useEffect(() => {
    if (!initialized) return;
    try {
      localStorage.setItem(
        CHECKOUT_STORAGE_KEY,
        JSON.stringify({ shippingAddress, paymentMethod }),
      );
    } catch {
      // ignore storage errors
    }
  }, [shippingAddress, paymentMethod, initialized]);

  const setShippingAddress = useCallback((address: ShippingAddress) => {
    setShippingAddressState(address);
  }, []);

  const setPaymentMethod = useCallback((method: string) => {
    setPaymentMethodState(method);
  }, []);

  const clearCheckout = useCallback(() => {
    setShippingAddressState(null);
    setPaymentMethodState(null);
    try {
      localStorage.removeItem(CHECKOUT_STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  return (
    <CheckoutContext.Provider
      value={{
        shippingAddress,
        paymentMethod,
        setShippingAddress,
        setPaymentMethod,
        clearCheckout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error('useCheckout must be used within a CheckoutProvider');
  }
  return context;
}

/**
 * Hook to guard checkout steps.
 * - Redirects to /cart if cart is empty
 * - Redirects to /checkout/shipping if shipping address is missing (for payment/review steps)
 * - Redirects to /checkout/payment if payment method is missing (for review step)
 */
export function useCheckoutGuard(
  step: 'shipping' | 'payment' | 'review',
) {
  const { shippingAddress, paymentMethod } = useCheckout();
  const { items } = useCart();
  const router = useRouter();

  useEffect(() => {
    // Cart must have items
    if (items.length === 0) {
      router.replace('/cart');
      return;
    }

    // Payment step requires shipping address
    if (step === 'payment' && !shippingAddress) {
      router.replace('/checkout/shipping');
      return;
    }

    // Review step requires both shipping and payment
    if (step === 'review') {
      if (!shippingAddress) {
        router.replace('/checkout/shipping');
        return;
      }
      if (!paymentMethod) {
        router.replace('/checkout/payment');
        return;
      }
    }
  }, [step, items.length, shippingAddress, paymentMethod, router]);
}
