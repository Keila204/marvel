import './index.scss';

export default function Cabecalho() {
  
    return (
      <header className='comp-cabecalho'>
        <img src="../assets/images/logo.svg"/>
        <div className='home'>
        <p>Home</p>
        <p>Personagens</p>
        <p>Quadrinhos</p>
        <p>Eventos</p>
        <p>Contato</p>
        </div>
        <img className = 'img' src='../assets/images/letra.svg'/>
      </header>
    )
  }