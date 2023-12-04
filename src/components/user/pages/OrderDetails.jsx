import React from 'react'
import NavbarUser from '../NavbarUser'
import OrderDetailsTable from '../OrderDetailsTable'
import { Link } from 'react-router-dom'
import Breadcrumb from '../Breadcrumb'

function OrderDetails() {
    const tableHeaders = ['Product', 'Description', 'Quantity', 'Price']
    const tableRows = [
        ['23/24 Home Shirt njdkcna cjasn jcnkas', 'Size: S\nLong-sleave', 1, '$140.99'],
        ['23/24 Home Shirt njdkcna cjasn jcnkas', 'Size: S\nLong-sleave', 1, '$140.99'],
        ['23/24 Home Shirt njdkcna cjasn jcnkas', 'Size: S\nLong-sleave', 1, '$140.99']
    ]
    // ['Previously previous page', 'Previous page', ..., 'Current page']
    const historyNav = ['Main', 'Orders', 'Order Products']

    return (
        <div>
            <NavbarUser></NavbarUser>
            <div className='flex justify-center items-center'>
                <div className='text-center text-[40px] font-bold'> {/* Title */}
                    <h1 className='border-b-8 border-primary inline-block'>Order #1</h1>
                </div>
            </div>
            <div className='mb-2 mt-2 text-center text-[20px] font-black'> {/* Breadcrumb */}
                <span>Purchase date: Dec-05-2023</span>
            </div>
            <Breadcrumb history={historyNav}></Breadcrumb>
            <div className='ml-10 mr-10 mb-10'> {/* table-wrapper */}
                <OrderDetailsTable headers={tableHeaders} rows={tableRows}></OrderDetailsTable>
            </div>
        </div>
    )
}

export default OrderDetails