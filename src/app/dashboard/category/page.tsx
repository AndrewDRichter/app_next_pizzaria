import styles from './styles.module.scss';
import { Button } from '@/app/dashboard/components/button';
import { api } from '@/services/api';
import { getCookieServer } from '@/lib/cookieServer';
import { redirect } from 'next/navigation';

export default function Category() {

    async function handleRegisterCategory(formData: FormData) {
        'use server'
        const name = formData.get('name');

        if (name === '') return;

        const data = {
            name: name,
        }

        const token = await getCookieServer();

        await api.post('/categories', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .catch((err) => {
                console.log(err)
                return;
            })

        redirect('/dashboard')

    }

    return (
        <main className={styles.container}>
            <h1>New Category</h1>

            <form
                className={styles.form}
                action={handleRegisterCategory}
            >
                <input
                    type="text"
                    name='name'
                    placeholder='Category name'
                    required
                    className={styles.input}
                />

                <Button text='Cadastrar' />
            </form>
        </main>
    )
}