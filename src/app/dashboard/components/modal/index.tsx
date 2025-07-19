'use client'
import styles from './styles.module.scss';
import { X } from 'lucide-react';
import { use } from 'react';
import { OrderContext } from '@/providers/order';
import Image from 'next/image';

export function OrderModal() {
    const { onRequestClose, items, finishOrder } = use(OrderContext);

    return (
        <dialog className={styles.dialogContainer}>
            <section className={styles.dialogContent}>
                <button className={styles.dialogCloseButton} onClick={onRequestClose}>
                    <X
                        size={40}
                        color='#ff3f4b'
                    />
                </button>

                <article className={styles.infoContainer}>
                    <h2>Detalhes do pedido</h2>

                    {items[0] && (
                        <span className={styles.tableInfo}>
                            Mesa <b>{items[0].Order.table}</b>
                        </span>
                    )}

                    {items[0]?.Order.name && (
                        <span className={styles.tableName}>
                            <b>{items[0].Order.name}</b>
                        </span>
                    )}

                    {items.map((item) => (
                        <section key={item.id} className={styles.itemContainer}>
                            {/* {item.Product.banner && (
                                <Image
                                    src={item.Product.banner}
                                    alt='Foto do produto'
                                    width={100}
                                    height={100}
                                />
                            )} */}
                            <span>{item.amount} - <b>{item.Product.name}</b></span>
                            <span className={styles.itemDescription}>{item.Product.description}</span>
                        </section>
                    ))}
                    <div className={styles.buttonContainer}>
                        <button className={styles.finishOrderButton} onClick={() => finishOrder(items[0].order_id)}>
                            Concluir pedido
                        </button>
                    </div>

                </article>
            </section>
        </dialog>
    )
}