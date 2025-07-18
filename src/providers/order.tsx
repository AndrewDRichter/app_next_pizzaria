'use client'
import { createContext, ReactNode, useState } from 'react';
import { api } from '@/services/api';
import { getCookieClient } from '@/lib/cookieClient';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface OrderItemProps {
    id: string;
    amount: number;
    created_at: string;
    order_id: string;
    product_id: string;
    Product: {
        id: string;
        name: string;
        price: number;
        description: string;
        banner: string;
        category_id: string;
    };
    Order: {
        id: string;
        table: number;
        name: string | null;
        draft: boolean;
        status: boolean;
    };
}

type OrderContextData = {
    isOpen: boolean;
    onRequestOpen: (order_id: string) => Promise<void>;
    onRequestClose: () => void;
    items: OrderItemProps[];
    finishOrder: (order_id: string) => Promise<void>;
}

type OrderProviderProps = {
    children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextData)

export function OrderProvider({ children }: OrderProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState<OrderItemProps[]>([])
    const router = useRouter();

    async function onRequestOpen(order_id: string) {

        const token = getCookieClient();

        const response = await api.get('/orders/details', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                order_id: order_id
            }
        })

        setItems(response.data)

        setIsOpen(true);
    }

    function onRequestClose() {
        setIsOpen(false);
    }

    async function finishOrder(order_id: string) {
        const token = getCookieClient();

        const data = {
            order_id: order_id,
        }

        try {

            await api.put('/orders/finish', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

        } catch (err) {
            console.log(err)
            toast.error('Erro ao finalizar pedido.')
            return;
        }

        setIsOpen(false);
        toast.success('Pedido finalizado!')
        router.refresh();
    }

    return (
        <OrderContext.Provider
            value={{
                isOpen,
                onRequestOpen,
                onRequestClose,
                items,
                finishOrder
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}