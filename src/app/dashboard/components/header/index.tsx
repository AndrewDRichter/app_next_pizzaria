import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';
import logoImg from '/public/logo_ok.svg';
import { LogOutIcon } from 'lucide-react';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href='/dashboard'>
                    <Image
                        src={logoImg}
                        alt='Logo app'
                        width={120}
                        priority={true}
                        quality={100}
                    />
                </Link>

                <nav>
                    <Link href='/dashboard/category'>
                        Categoria
                    </Link>
                    <Link href='/dashboard/product'>
                        Produto
                    </Link>
                    <form>
                        <button type='submit'>
                            <LogOutIcon
                                size={30}
                                color='#fff'
                            />
                        </button>
                    </form>
                </nav>
            </div>
        </header>
    )
}