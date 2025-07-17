'use client'
import styles from './styles.module.scss';
import { X } from 'lucide-react';
import { use } from 'react';
import { OrderContext } from '@/providers/order';

export function OrderModal() {
    const { onRequestClose } = use(OrderContext);

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

                    <span className={styles.tableInfo}>
                        Mesa <b>2</b>
                    </span>

                    <section className={styles.itemContainer}>
                        <span>1 - <b>Coca cola lata</b></span>
                        <span className={styles.itemDescription}>Coca cola geladinha tamanho lata</span>
                    </section>

                    <button className={styles.finishOrderButton}>
                        Concluir pedido
                    </button>

                </article>
            </section>
        </dialog>
    )
}