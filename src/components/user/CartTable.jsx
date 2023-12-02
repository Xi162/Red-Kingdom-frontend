import React from 'react'
import shirt_placeholder from '../../assets/shirt_placeholder.jpeg'

function CartTable({ headers, rows }) {
    return (
        <div className=''>
            <table className='border-separate border-spacing-0 min-w-full'>
                <thead>
                    <tr className=''>
                        <th className={`p-[10px] sticky top-0 bg-gray-200 text-left pl-5`}></th>
                        {headers.map((header, index) => (
                            <th key={index} className={`p-[10px] sticky top-0 bg-gray-200 text-left pl-5 ${index === 2 || index === 3 ? 'text-center pl-3' : ''
                                } text-[25px]`}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className='bg-white shadow-xl cursor-pointer hover:bg-gray-100'>
                            <td className={`pl-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white`}>
                                <img src={shirt_placeholder} alt="" className='w-[100px] h-[80px]' />
                            </td>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className={`pl-[20px] pr-[20px] pt-[30px] pb-[30px] text-[18px] border-b-2 border-b-gray-300 border-t-8 border-t-white ${cellIndex === 2 || cellIndex === 3 ? 'text-center font-black' : ''
                                    }`}>
                                    {cell === 'Pending' && (
                                        <span className='text-orange-500'>{cell}</span>
                                    )}
                                    {cell === 'Fail' && (
                                        <span className='text-red-500'>{cell}</span>
                                    )}
                                    {cell === 'Complete' && (
                                        <span className='text-green-500'>{cell}</span>
                                    )}
                                    {cellIndex === 1 && (
                                        <div dangerouslySetInnerHTML={{ __html: cell.replace(/\n/g, '<br/>') }} />
                                    )}
                                    {cell !== 'Pending' && cell !== 'Fail' && cell !== 'Complete' && cellIndex !== 1 && (
                                        <span>{cell}</span>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CartTable