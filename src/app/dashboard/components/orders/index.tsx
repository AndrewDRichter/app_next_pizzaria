'use client'
import { use } from 'react';
import styles from './styles.module.scss';
import { RefreshCwIcon } from 'lucide-react';
import { OrderProps } from '@/lib/order.type';
import { OrderModal } from '../modal';
import { OrderContext } from '@/providers/order';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface OrdersProps {
    orders: OrderProps[] | [];
}

export function Orders({ orders }: OrdersProps) {
    const { isOpen, onRequestOpen } = use(OrderContext)
    const router = useRouter();

    async function handleOrderDetail(order_id: string) {
        await onRequestOpen(order_id)
    }

    function handleRefresh() {
        router.refresh();
        toast.info('Lista atualizada.')
    }

    return (
        <>
            <main className={styles.container}>

                <section className={styles.containerHeader}>
                    <h1>Latest orders</h1>
                    <button onClick={handleRefresh}>
                        <RefreshCwIcon
                            size={24}
                            color='#3fffa3'
                        />
                    </button>
                </section>

                <section className={styles.listOrders}>

                    {orders.length === 0 && (
                        <span className={styles.emptyOrders}>
                            Não há pedidos no momento.
                        </span>
                    )}

                    {orders.map((order) => (
                        <button
                            className={styles.orderItem}
                            key={order.id}
                            onClick={() => handleOrderDetail(order.id)}
                        >
                            <div className={styles.tag}></div>
                            <span>Mesa {order.table}</span>
                        </button>
                    ))}
                </section>

            </main>

            {isOpen && <OrderModal />}
        </>
    )
}