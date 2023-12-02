import React from 'react'
import NavbarUser from '../NavbarUser'
import OrderDetailsTable from '../OrderDetailsTable'
import { Link } from 'react-router-dom'

function OrderDetails() {
    const tableHeaders = ['Product', 'Description', 'Quantity', 'Price'];
    const tableRows = [
        ['23/24 Home Shirt njdkcna cjasn jcnkas', 'Size: S\nLong-sleave', 1, '$140.99'],
        ['23/24 Home Shirt njdkcna cjasn jcnkas', 'Size: S\nLong-sleave', 1, '$140.99'],
        ['23/24 Home Shirt njdkcna cjasn jcnkas', 'Size: S\nLong-sleave', 1, '$140.99']
    ]

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
            <div className='ml-20 mb-2 mt-2'> {/* Breadcrumb */}
                <Link className='underline mr-2 font-bold text-[18px]'>Main</Link>
                <span>&gt;</span>
                <Link className='underline ml-2 text-primary font-bold text-[18px] mr-2'>Orders</Link>
                <span>&gt;</span>
                <Link className='underline ml-2 text-primary font-bold text-[18px] mr-2'>Order Products</Link>
            </div>
            <div className='ml-10 mr-10'> {/* table-wrapper */}
                <OrderDetailsTable headers={tableHeaders} rows={tableRows}></OrderDetailsTable>
            </div>
            <img src="../../assets/shirt_placeholder.jpg" alt="" />
        </div>
    )
}

export default OrderDetails