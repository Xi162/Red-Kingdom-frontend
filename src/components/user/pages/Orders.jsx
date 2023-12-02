import React from 'react'
import NavbarUser from '../NavbarUser'
import { Link } from 'react-router-dom'
import OrdersTable from '../OrdersTable'

function Orders() {
    const tableHeaders = ['Order ID', 'Purchase Date', 'Status', 'Price'];
    const tableRows = [
        [1, 'Dec-05-2023', 'Pending', '$140.99'],
        [2, 'Dec-05-2023', 'Fail', '$140.99'],
        [3, 'Dec-05-2023', 'Complete', '$140.99']
    ]

    return (
        <div>
            <NavbarUser></NavbarUser>
            <div className='flex justify-center items-center'>
                <div className='text-center text-[40px] font-bold'> {/* Title */}
                    <h1 className='border-b-8 border-primary inline-block'>Orders</h1>
                </div>
            </div>
            <div className='ml-20 mb-2 mt-2'> {/* Breadcrumb */}
                <Link className='underline mr-2 font-bold text-[18px]'>Main</Link>
                <span>&gt;</span>
                <Link className='underline ml-2 text-primary font-bold text-[18px]'>Orders</Link>
            </div>
            <div className='ml-10 mr-10'> {/* table-wrapper */}
                <OrdersTable headers={tableHeaders} rows={tableRows}></OrdersTable>
            </div>
        </div>
    )
}

export default Orders