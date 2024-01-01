import React from 'react'
import { fetchUsers } from '../lib/data'

const DashboardPage = async () => {
    const users = await fetchUsers();
    console.log(users)
    return (
        <div> DashboardPage</div>
    )
}

export default DashboardPage