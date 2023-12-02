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
            <div className=''>
                <Table headers={tableHeaders} rows={tableRows}></Table>
            </div>
            <hr className='border-border border-t-2 mb-1'></hr>
            <hr className='border-border border-t-2 mb-1'></hr>
            <div className='text-center mt-2'>
                <p className='text-base text-primary font-bold'>100 Total</p>
            </div>
            <div className='flex mt-2 items-center justify-center'>
                <div className='flex flex-row justify-center border border-gray-300 rounded-lg shadow-2xl w-auto h-auto'>
                    <button className='page-number-current'>&lt;</button>
                    <button className='page-number-current'>1</button>
                    <button className='page-number-current'>2</button>
                    <button className='page-number-current'>3</button>
                    <button className='page-number-current'>...</button>
                    <button className='page-number-current'>12</button>
                    <button className='page-number-current mr-3'>&gt;</button>
                </div>
            </div>
        </div>
    )
}

export default ShopHistory