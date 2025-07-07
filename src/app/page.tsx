import styles from './page.module.scss';
import jakaruImg from '/public/logo_ok.svg'
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className={styles.containerCenter}>
        <Image
          src={jakaruImg}
          alt='Company logo'
          width={300}
          priority
        />

        <section className={styles.login}>
          <form>
            <input
              type='email'
              required
              name='email'
              placeholder='Ingresa tu email'
              className={styles.input}
            />

            <input
              type='password'
              required
              name='password'
              placeholder='********'
              className={styles.input}
            />

            <button
              type='submit'
            >
              Entrar
            </button>
          </form>

          <Link
            href='/signup'
            className={styles.text}
          >
            No tienes una cuenta? Regístrate
          </Link>
        </section>
      </div>
    </>
  )
}