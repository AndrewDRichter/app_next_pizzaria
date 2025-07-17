import styles from './styles.module.scss';
import { RefreshCwIcon } from 'lucide-react';
import { OrderProps } from '@/lib/order.type';

interface OrdersProps {
    orders: OrderProps[] | [];
}

export function Orders({ orders }: OrdersProps) {
    return (
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
                    >
                        <div className={styles.tag}></div>
                        <span>Mesa {order.table}</span>
                    </button>
                ))}

                {/* <button className={styles.orderItem}>
                    <div className={styles.tag}></div>
                    <span>Mesa 13</span>
                </button> */}
            </section>

        </main>
    )
}