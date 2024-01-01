import React from 'react'
import styles from "./navbar.module.css"
import Image from "next/image"
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className={styles.container}>
            <Image
                src="/profile_image.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
                className={styles.profileImage}
            />
            <div className={styles.currentAddress}>
                <select name="currentAddress" id="currentAddress">
                    <option value="1">Kunal Gorawat, 206C, Boston Living, Hyderabad, IN</option>
                </select>
            </div>
            <div className={styles.search}>
                <FaSearch />
                <input type="text" placeholder="Search products" className={styles.input} />
            </div>
            <div className={styles.rightNavSection}>
                <div className={styles.wishlist}>Wishlist</div>
                <div className={styles.addres}>Address</div>
                <div className={styles.orders}>Orders</div>
                <div className={styles.cart}>Cart</div>
            </div>
        </div >
    )
}

export default Navbar