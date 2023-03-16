import React from 'react';
import LogoQuiz from '../../assets/images/quiz.png';
import './styles.css';

function Home() {
  return (
    <div className='container'>
        <h1 className='title'>Bem-Vindo ao</h1>
        <img src={LogoQuiz} alt="Logo Quiz" className='logo'/>
        <small className='description'>Teste seus conhecimentos sobre React</small>

        <button className='button-start'>🚀 Começar</button>

        <footer className='footer'>
            <span className='author'>Criado por <a href='https://github.com/Ceguinz' target='_blank' rel="noreferrer" className='author'>Ceguin👨‍🦯</a></span>
        </footer>
    </div>
  )

}

export default Home