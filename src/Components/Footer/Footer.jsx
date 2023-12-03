import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} width="75" height = "75" alt="" />
                <p>Shop</p>
            </div>
            <ul className="footer-links">
                <li>Empresa</li>
                <li>Produtos</li>
                <li>Escritórios</li>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-items-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-items-container">
                    <img src={pinterest_icon} alt="" />
                </div>
                <div className="footer-items-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2023 - Todos os direitos reservados</p>
            </div>
        </div>
    )
}

export default Footer