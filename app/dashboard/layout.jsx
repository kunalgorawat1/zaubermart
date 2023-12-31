import React from 'react'
import styles from "../ui/dashboard/dashboard.module.css"
import Navbar from '../ui/dashboard/navbar/navbar'

const Layout = ({ children }) => {
    return (
        <div>
            <div className={styles.navbar}>
                <Navbar />
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default Layout