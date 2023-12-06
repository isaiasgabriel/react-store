import React from 'react'
import Landing from '../Components/Landing/Landing.tsx'
import Popular from '../Components/Popular/Popular.jsx'
import Offers from '../Components/Offers/Offers.jsx'
import NewCollections from '../Components/NewCollections/NewCollections.jsx'
import { useEffect } from 'react'

const Shop = () => {
    useEffect(() => {
    document.title = 'e-fantasias';
  }, []);

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