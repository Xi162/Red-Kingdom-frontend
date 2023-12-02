import React from 'react'
import { Routes, Route, Link, useAsyncError } from 'react-router-dom'
import NavbarAdmin from '../NavbarAdmin'
import Sidebar from '../Sidebar'
import ShopAdd from '../ShopAdd'
import ShopUpdate from '../ShopUpdate'
import { useState } from 'react'

function ShopManagement() {
    const [isSelected, setIsSelected] = useState(true)

    const handleSelectedAdd = () => {
        setIsSelected(true)
    }

    const handleSelectedUpdate = () => {
        setIsSelected(false)
    }

    return (
        <div className='flex-[4] ml-2 mr-7'>
            <Link className={isSelected ? 'button-pressed' : 'button-unpressed'} to='/management' onClick={handleSelectedAdd}>Add</Link>
            <Link className={!isSelected ? 'button-pressed' : 'button-unpressed'} to='/management/update' onClick={handleSelectedUpdate}>Update</Link>
            <Routes>
                <Route path='/' element={<ShopAdd/>}></Route>
                <Route path='update' element={<ShopUpdate/>}></Route>
            </Routes>
        </div>
    )
}

export default ShopManagement