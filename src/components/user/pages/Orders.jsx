import React from 'react'
import NavbarUser from '../NavbarUser'
import { Link } from 'react-router-dom'
import OrdersTable from '../OrdersTable'
import Breadcrumb from '../Breadcrumb';

function Orders() {
    const tableHeaders = ['Order ID', 'Purchase Date', 'Status', 'Price'];
    const tableRows = [
        [1, 'Dec-05-2023', 'Pending', '$140.99'],
        [2, 'Dec-05-2023', 'Fail', '$140.99'],
        [3, 'Dec-05-2023', 'Complete', '$140.99']
    ]
    // ['Previously previous page', 'Previous page', ..., 'Current page']
    const historyNav = ['Main', 'Orders']

    return (
        <div>
            <NavbarUser></NavbarUser>
            <div className='flex justify-center items-center'>
                <div className='text-center text-[40px] font-bold'> {/* Title */}
                    <h1 className='border-b-8 border-primary inline-block'>Orders</h1>
                </div>
            </div>
            <Breadcrumb history={historyNav}></Breadcrumb>
            <div className='ml-10 mr-10'> {/* table-wrapper */}
                <OrdersTable headers={tableHeaders} rows={tableRows}></OrdersTable>
            </div>
        </div>
    )
}

export default Orders