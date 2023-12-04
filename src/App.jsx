import React from 'react'
import ShopMain from './components/admin/pages/ShopMain'
import Orders from './components/user/pages/Orders'
import { Routes, Route } from 'react-router-dom'
import OrderDetails from './components/user/pages/OrderDetails'
import Cart from './components/user/pages/Cart'

function App() {
    return (
        <>
            {/* add /management or /history in search bar to get to pages with ShopMain enable */}
            {/* <ShopMain/> */}

            {/* <Orders/> */}
            {/* <OrderDetails/> */}
            <Cart/>
        </>
    )
}

export default App