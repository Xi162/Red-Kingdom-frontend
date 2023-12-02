import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ShopManagement from './ShopManagement'
import ShopHistory from './ShopHistory'
import NavbarAdmin from '../NavbarAdmin'
import Sidebar from '../Sidebar'

function ShopMain() {
    return (
        <>
            <NavbarAdmin/>
            <div className='flex flex-row w-full h-screen mt-3'>
                <Sidebar/>
                <Routes>
                    <Route path='/management/*' element={<ShopManagement/>}/>
                    <Route path='/history' element={<ShopHistory/>}/>
                </Routes>
            </div>
        </>
    )
}

export default ShopMain