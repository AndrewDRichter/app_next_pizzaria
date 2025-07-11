import styles from './styles.module.scss';
import { RefreshCwIcon } from 'lucide-react';

export function Orders() {
    return (
        <main className={styles.ordersContainer}>

            <section className={styles.containerHeader}>
                <h1>Latest orders</h1>
                <button>
                    <RefreshCwIcon
                        size={30}
                    />
                </button>
            </section>

        </main>
    )
}