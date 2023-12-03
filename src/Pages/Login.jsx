import React from 'react'
import './CSS/Login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className="login-container">
                <h1>Registre-se</h1>
                <div className="login-fields">
                    <input type="text" placeholder='Seu Nome' />
                    <input type="email" placeholder='Seu E-mail'/>
                    <input type="password" placeholder='Sua Senha' />
                </div>
                <button>Continue</button>
                <p className="login-login">
                    Já Possui Uma Conta ? <span>Entre Aqui</span>
                </p>
                <div className="login-agree">
                    <input type="checkbox" name='' id = ''/>
                    <p>Ao continuar, você aceita os termos de uso e políticas de privacidade.</p>
                </div>
            </div>
        </div>
    )
}
export default Login