import React from 'react'
import Table from '../Table'

function ShopHistory() {
    const tableHeaders = ['ID', 'Customer Name', 'Product Name', 'Category', 'Quantity', 'Price',
        'Order Status', 'Received Date', 'Time', 'Completed Time', 'Time', 'Action'];
    const tableRows = [
        [1, 'Kevin De Bruyne', 'Long ass T-Shirts', 'Shirt', 1, '$5', 'Pending', 'Dec-28-2023', '1:00AM', 'Dec-28-2023', '5:30PM', 'temp'],
        [2, 'John Doe', 'Very Long T-Shirts', 'Shirt', 1, '$5', 'Pending', 'Dec-28-2023', '1:00AM', 'Dec-28-2023', '5:30PM', 'temp'],
        [3, 'John Doe', 'Hat for Young Children to Wear', 'Hat', 1, '$5', 'Pending', 'Dec-28-2023', '1:00AM', 'Dec-28-2023', '5:30PM', 'temp'],
        [4, 'John Doe', 'Long T-Shirts', 'Shirt', 1, '$5', 'Pending', 'Dec-28-2023', '1:00AM', 'Dec-28-2023', '5:30PM', 'temp'],
        [5, 'John Doe', 'Long T-Shirts', 'Shirt', 1, '$5', 'Pending', 'Dec-28-2023', '1:00AM', 'Dec-28-2023', '5:30PM', 'temp'],
        [6, 'John Doe', 'Long T-Shirts', 'Shirt', 1, '$5', 'Pending', 'Dec-28-2023', '1:00AM', 'Dec-28-2023', '5:30PM', 'temp'],
        [7, 'John Doe', 'Long T-Shirts', 'Shirt', 1, '$5', 'Pending', 'Dec-28-2023', '1:00AM', 'Dec-28-2023', '5:30PM', 'temp']
    ]

    return (
        <div className='flex-[5] ml-2 mr-7 flex-col'>
            <div className='flex items-end justify-end h-[15vh] mb-3'>
                <button className='w-[15%] border border-border text-white bg-primary text-lg font-black p-1 rounded-lg'>Print All</button>
            </div>
            <hr className='border-border border-t-2 mb-1'></hr>
            <hr className='border-border border-t-2 mb-1'></hr>
            <div className='mb-1'>
                <Table headers={tableHeaders} rows={tableRows}></Table>
            </div>
            <hr className='border-border border-t-2 mb-1'></hr>
            <hr className='border-border border-t-2 mb-1'></hr>
            <div className='text-center mt-2'>
                <p className='text-base text-primary font-bold'>100 Total</p>
            </div>
            <div className='flex mt-2 items-center justify-center'>
                <div className='flex flex-row justify-center border border-gray-300 rounded-lg shadow-inner w-auto h-auto'>
                    <button><svg className='left-right-arrow' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                    </svg></button>
                    <button className='page-number-current'>1</button>
                    <button className='page-number'>2</button>
                    <button className='page-number'>3</button>
                    <button className='page-number'>...</button>
                    <button className='page-number'>12</button>
                    <button><svg className='left-right-arrow mr-3' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                    </svg></button>
                </div>
            </div>
        </div>
    )
}

export default ShopHistory