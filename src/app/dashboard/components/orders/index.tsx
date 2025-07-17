'use client'
import { use } from 'react';
import styles from './styles.module.scss';
import { RefreshCwIcon } from 'lucide-react';
import { OrderProps } from '@/lib/order.type';
import { OrderModal } from '../modal';
import { OrderContext } from '@/providers/order';

interface OrdersProps {
    orders: OrderProps[] | [];
}

export function Orders({ orders }: OrdersProps) {
    const { isOpen, onRequestOpen } = use(OrderContext)

    function handleOrderDetail(order_id: string) {
        onRequestOpen(order_id)
    }

    return (
        <>
            <main className={styles.container}>

                <section className={styles.containerHeader}>
                    <h1>Latest orders</h1>
                    <button>
                        <RefreshCwIcon
                            size={24}
                            color='#3fffa3'
                        />
                    </button>
                </section>

                <section className={styles.listOrders}>
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