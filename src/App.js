import React from 'react';
import './App.css';

function App() {
  const handleOpenVideo = () => {
    window.open('https://www.youtube.com/watch?v=NrQ_4I3_c-A', '_blank');
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Más allá del amanecer</h1>
        
        <div className="letra">
          <p>Tras una vida fuerte, vi tu amanecer brillar. Sé que las acciones fáciles son mentiras, y juré no rendirme ante palabras que desean callar. Quiero que tú, y solo tú, entiendas mi mañana.</p>
          
          <p>Al darme un tiempo que fue difícil de soñar. ¿Quién soy para ti? ¿Un recuerdo o un pensamiento?</p>
          
          <p>Más allá del amanecer, más allá del amanecer, aún hay tantas cosas que quiero contarte, que con tanto, con tanto amor, mis palabras no pudieron expresar.</p>
          
          <p>Con mis pequeños deseos, busqué encontrarla. Oye, ¿recuerdas aquel día donde empecé a sonreír? Quiero hablarte de ello, en todo este momento sin parar.</p>
          
          <p>Y sentir lo fugaz que es el pasar del tiempo al valorar este hermoso momento.</p>
          
          <p>¿Quién soy para ti? ¿Un pasado olvidable o un futuro indeseable? A veces dudo y me detengo, pero no me quiero quedar solo en el silencio.</p>
          
          <p>Solo mis sentimientos, solo sentimientos. Si los compartimos, ya es vivir de verdad. Aunque me pierda, me pierda, seremos esa luz que nos guíe al mañana.</p>
          
          <p>Con esos pequeños deseos, quise encontrarla. Mira, después de todo lo sufrido, solo sonrisas encontrarás.</p>
          
          <p>En el más allá de tu amanecer, más allá del amanecer, aún hay tantas cosas que quiero contarte, que con tanto, con tanto amor, mis palabras no pudieron expresar.</p>
          
          <p>Solo júrame que siempre sonreirás siendo tú, no cambies jamás, que con mucho, con mucho amor protegido siempre serás.</p>
          
          <p>Entonces, dime... ¿seré pasado o futuro?</p>
          
          <p>Lo somos.</p>
        </div>
        
        <div className="firma">
          — Gabriel García.
        </div>
        
        <div className="video-section">
          <div className="video-thumbnail" onClick={handleOpenVideo}>
            <img src="Mañana.png" alt="Inspiración" />
          </div>
          <button className="inspiration-btn" onClick={handleOpenVideo}>
            Inspiración
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;