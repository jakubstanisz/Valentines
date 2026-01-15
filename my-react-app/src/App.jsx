import { useState, useEffect, useRef } from 'react'
import superzdjecie from "./assets/superzdjecie.jpg"
import roza from "./assets/roza.png"
import piosenka from "./assets/muza.mp3"
import actually from "./assets/actually.jpg"

function App() {
  const [isAccepted, setIsAccepted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isAccepted && audioRef.current) {
      audioRef.current.volume = 0.7;
      audioRef.current.loop = true;
      audioRef.current.play().catch(error => {
        console.log("muzyczka nie dziala :(", error);
      });
    }
  }, [isAccepted]);

  if (isAccepted) {
    return (
      <div className="firstDiv">
        <audio ref={audioRef} src={piosenka} />
        <h1>Superrrr! ❤️</h1>
        <img 
          src={actually} 
          style={{ 
          width: '250px', 
          height: '350px',  
          objectFit: 'cover' 
        }} 
        />
      </div>
    );
  }

  return (
    <>
    <div className="firstDiv">
      <h1>Czy zostaniesz moja walentynka Amelka?</h1>
      <div className='divGuzikowy'>
        <img src={roza} alt="roza" className='zdjecie' />
        <img src={superzdjecie} alt="zdjecie" className='zdjecie'/>
        <img src={roza} alt="roza" className='zdjecie' />
      </div>
      <div className="divGuzikowy">
        <button className="guzik1" onClick={() => setIsAccepted(true)}>Tak</button>
        <button className="guzik2" onClick={() => alert("nie ma takiej opcji pffff")}>Nie</button>
      </div>
    </div>
    </>
  )
}

export default App