import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb({ history }) {
    return (
        <div className='ml-20 mb-2 mt-2 flex'> {/* Breadcrumb */}
            {history.map((page, index) => (
                <div key={index} className='inline-block'>
                    <Link className={`breadcrumb ${index === history.length - 1 ? 'text-primary' : ''}`}>{page}</Link>
                    {index !== history.length - 1 && (
                        <svg className='w-4 inline-block' fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                        </svg>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Breadcrumb;
