import { api } from '@/services/api';
import styles from '../page.module.scss';
import jakaruImg from '/public/logo_ok.svg'
import Image from "next/image"
import Link from "next/link"
import { redirect } from 'next/navigation';
import { toast } from 'sonner';

export default function Signup() {

    async function handleSignup(formData: FormData) {
        'use server'

        const name = formData.get('name')
        const email = formData.get('email')
        const password = formData.get('password')

        if (name === '' || email === '' || password === '') {
            return;
        }

        try {
            await api.post("/users", {
                name,
                email,
                password
            })
        } catch (err) {
            console.log(`Error: ${err}`)
            return;
        }
        // toast.success('Cadastrado com sucesso.')
        redirect("/")
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

                    <h1>Vamos a crear tu cuenta</h1>
                    <form action={handleSignup}>
                        <input
                            type='text'
                            required
                            name='name'
                            placeholder='Ingresa tu nombre'
                            className={styles.input}
                        />

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
                            Crear
                        </button>
                    </form>

                    <Link
                        href='/'
                        className={styles.text}
                    >
                        Ya tienes una cuenta? Ingresá
                    </Link>
                </section>
            </div>
        </>
    )
}