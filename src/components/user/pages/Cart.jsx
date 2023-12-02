import React from 'react'
import NavbarUser from '../NavbarUser'
import CartTable from '../CartTable'
import { Link } from 'react-router-dom'

function Cart() {
    const tableHeaders = ['Product', 'Description', 'Quantity', 'Price'];
    const tableRows = [
        ['23/24 Home Shirt njdkcna cjasn jcnkas', 'Size: S\nLong-sleave', 1, '$140.99'],
        ['23/24 Home Shirt njdkcna cjasn jcnkas', 'Size: S\nLong-sleave', 1, '$140.99'],
        ['23/24 Home Shirt njdkcna cjasn jcnkas', 'Size: S\nLong-sleave', 1, '$140.99']
    ]

    return (
        <div>
            <NavbarUser></NavbarUser>
            <div className='ml-20 mb-2 mt-2'> {/* Breadcrumb */}
                <Link className='underline mr-2 font-bold text-[18px]'>Main</Link>
                <span>&gt;</span>
                <Link className='underline ml-2 font-bold text-[18px] mr-2'>Kit</Link>
                <span>&gt;</span>
                <Link className='underline ml-2 font-bold text-[18px] mr-2'>Details</Link>
                <span>&gt;</span>
                <Link className='underline ml-2 text-primary font-bold text-[18px] mr-2'>Cart</Link>
            </div>
            <div className='ml-10 mr-10'> {/* table-wrapper */}
                <CartTable headers={tableHeaders} rows={tableRows}></CartTable>
                <div className='mt-10 text-[25px] font-black'>
                    <span>TOTAL</span>
                </div>
                <div className='flex justify-between mt-5 font-black'>
                    <div className='text-[20px]'>Number of products: 3</div>
                    <div className='text-[25px]'>$123.45</div>
                </div>
                <div className='flex items-end justify-end mt-5 mb-10'>
                    <button className='w-[20%] border border-border text-white bg-primary text-[25px] font-black p-3 rounded-lg'>CHECK OUT</button>
                </div>
            </div>
        </div>
    )
}

export default Cart