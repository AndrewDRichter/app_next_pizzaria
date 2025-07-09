import { api } from '@/services/api';
import styles from './page.module.scss';
import jakaruImg from '/public/logo_ok.svg'
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default function Page() {

  async function handleSignIn(formData: FormData) {
    'use server'

    const email = formData.get('email')
    const password = formData.get('password')

    if (email === '' || password === '') {
      return;
    }

    try {
      const response = await api.post('/login', {
        email,
        password
      })

      if (!response.data.token) {
        return;
      }

      const expressTime = 60 * 60 * 24 * 30 * 1000;
      const cookieStore = await cookies();

      cookieStore.set('session', response.data.token, {
        maxAge: expressTime,
        path: '/',
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production'
      })

      console.log(response.data)
    } catch (err) {
      console.log(`Error: ${err}`)
      return;
    }
    redirect('/dashboard')
  }

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
          <form action={handleSignIn}>
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