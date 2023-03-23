import React from 'react';
import { useNavigate } from 'react-router-dom';

import LogoQuiz from '../../assets/images/quiz.png';
import './styles.css';

function Home() {
  const navigate = useNavigate();

  function start(){
    return navigate('/game')
  }
  
  return (
    <div className='container'>
        <h1 className='title'>Bem-Vindo ao</h1>
        <img src={LogoQuiz} alt="Logo Quiz" className='logo'/>
        <small className='description'>Teste seus conhecimentos sobre React</small>

        <button onClick={start} className='button-start'>🚀 Começar</button>

        <footer className='footer'>
            <span className='author'>Criado por <a href='https://github.com/Ceguinz' target='_blank' rel="noreferrer" className='author'>Ceguin👨‍🦯</a></span>
        </footer>
    </div>
  )

}

export default Home