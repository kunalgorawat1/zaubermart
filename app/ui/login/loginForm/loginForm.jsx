import React from 'react'
import styles from "./loginForm.module.css"

const LoginForm = () => {
    return (
        <form className={styles.form}>
            <h1>Login</h1>
            <input type="text" name='username' placeholder='username' />
            <input type="password" name="password" placeholder='password' />
            <button>Login</button>
        </form>
    )
}

export default LoginForm