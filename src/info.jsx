import photo from './images/photo.jpg'

export default function Info(){
    return (
      <header className="header">
        <img src={photo} alt="Leandro dos Santos Luiz" />
        <h1>Leandro dos Santos Luiz</h1>
        <h2>Frontend Developer</h2>
        <p>leandrodos.com</p>
        <div className='btn-div'>
          <button>Email</button>
          <button className='link-btn'>Linkedln</button>
        </div>
      </header>
    );
}