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
          <p>Tras una vida fuerte, vi el amanecer brillar. </p>
            
          <p>  Sé que aquellas palabras fueron dificiles de creer,  </p>
          <p>  y juré no rendirme ante mis propias decisiones. </p>
           <p>  Quiero que tú, y solo tú, entiendas mi mañana.</p>          
          <p>Al darme un tiempo que fue difícil de soñar.</p>
            <p> ¿Quién soy para ti? ¿Un recuerdo o un pensamiento?</p>
          
          <p>Más allá del amanecer, más allá del amanecer,</p>
          <p> aún hay tantas cosas que quiero contarte, </p>
           <p> que con amor , que con amor,</p>
          <p> en una carta no puedo expresar.</p>
          <p>Con mis pequeños deseos, busqué el mañana. </p>
            
          <p>Oye, ¿recuerdas aquel día donde empecé a sonreír?</p>
           <p> Quiero hablarte de ello, en este momento sin parar.</p>
          <p>Y sentir lo fugaz que es el pasar del tiempo, </p>
            <p>al valorar este hermoso recuerdo.</p>        
          <p>A veces dudo y me detengo, </p>
          <p>es que no me quiero quedar solo en el silencio.</p>
          
          <p>Solo sentimientos, solo sentimientos. </p>
           <p> Si los compartimos, ya es vivir de verdad. </p>
           <p> Aunque me pierda, me pierda,</p>
           <p>  seremos esa luz que nos guíe al vivir.</p>          
          <p>Con esos pequeños deseos, quise encontrarte.</p>
            
            <p> Mira, después de todo lo sufrido, solo sonrisas encontrarás.</p>
          
          <p>En el más allá de tu amanecer, más allá del amanecer,</p> 
           <p> aún hay tantas cosas que quiero contarte, </p>
           <p> que con tanto, con tanto amor,</p>
           <p>mis palabras no pudieron expresar.</p>
          
          <p>Solo júrame que siempre sonreirás siendo tú, no cambies jamás, </p>
           <p> que con mucho, con mucho, amor<p> 
              </p>  protegido siempre estarás...</p>
          
          <p>Entonces, dime... ¿seré pasado o futuro?</p>
          
          <p>We Are.</p>
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