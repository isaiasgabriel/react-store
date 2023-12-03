import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'
import './Offers.css'

const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusivas</h1>
                <h1>Ofertas para você</h1>
                <p>OS MELHORES PRODUTOS</p>
                <button>Confira Agora</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers
