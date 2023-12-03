import React from 'react'
import './Landing.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import land_image from '../Assets/hero_image.png'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className='landing'>
            <div className="land-left">
                <h2>RENOVAÇÃO DE ESTOQUE</h2>
                <div>
                    <div className="land-hand-icon">
                        <p>NOVA</p>
                        <img src={hand_icon} alt=''></img>
                    </div>
                    <p>coleção</p>
                    <p>para todos</p>
                </div>
                <Link to="/" style={{textDecoration : 'none'}}>
                <div className="land-latest-button">
                    <div>Nova coleção</div>
                    <img src={arrow_icon} alt="" />
                </div>
                </Link>
            </div>
            <div className="land-right">
                <img src={land_image} alt="" />
            </div>
        </div>
    )
}
export default Landing