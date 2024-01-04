import React from 'react'
import styles from "./loginForm.module.css"
import { authenticate } from '@/app/lib/actions'

const LoginForm = () => {
    return (
        <form action={authenticate} className={styles.form}>
            <h1>Login</h1>
            <input type="text" name='email' placeholder='email' />
            <input type="password" name="password" placeholder='password.' />
            <button>Login</button>
        </form>
    )
}

export default LoginForm