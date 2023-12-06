import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'
import './Offers.css'
import { Link } from 'react-router-dom'

const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusivas</h1>
                <h1>Ofertas para você</h1>
                <p>OS MELHORES PRODUTOS</p>
            <Link to={'kids'} onClick={()=>window.scrollTo(0,0)}>
                <button>Confira Agora</button>
            </Link>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers
