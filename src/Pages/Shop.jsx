import React from 'react'
import Landing from '../Components/Landing/Landing.tsx'
import Popular from '../Components/Popular/Popular.jsx'
import Offers from '../Components/Offers/Offers.jsx'
import NewCollections from '../Components/NewCollections/NewCollections.jsx'

const Shop = () => {
    return (
        <div>
            <Landing/>
            <Popular/>
            <Offers/>
            <NewCollections/>
        </div>
    )
}
export default Shop