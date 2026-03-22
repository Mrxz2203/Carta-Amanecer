import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, ExternalLink, ChevronDown, Clock, Radio } from 'lucide-react';
import './Carta.css';

const AUDIO_SRC = '/amanecer.mp3';
const IMAGE_SRC = '/Katachi.png';

// ─── TIEMPOS POR PÁGINA (en segundos) ──────────────────────────────────────
const tiemposPaginas = {
  1:  { inicio: 0,   fin: 15  },
  2:  { inicio: 15,  fin: 22  },
  3:  { inicio: 23,  fin: 31  },
  4:  { inicio: 32,  fin: 41  },
  5:  { inicio: 42,  fin: 50  },
  6:  { inicio: 51,  fin: 61  },
  7:  { inicio: 62,  fin: 71  },
  8:  { inicio: 72,  fin: 81  },
  9:  { inicio: 82,  fin: 88  },
  10: { inicio: 89,  fin: 97  },
  11: { inicio: 98,  fin: 108 },
  12: { inicio: 109, fin: 117 },
  13: { inicio: 118, fin: 127 },
  14: { inicio: 128, fin: 138 },
  15: { inicio: 139, fin: 146 },
  16: { inicio: 147, fin: 157 },
  17: { inicio: 158, fin: 167 },
  18: { inicio: 168, fin: 178 },
  19: { inicio: 179, fin: 188 },
  20: { inicio: 189, fin: 196 },
  21: { inicio: 197, fin: 207 },
  22: { inicio: 208, fin: 214 },
  23: { inicio: 215, fin: 219 },
};

// ─── CONTENIDO DE LAS PÁGINAS ──────────────────────────────────────────────
const cartas = {
  1: {
    titulo: 'Amanecer',
    texto: `Tras una vida fuerte,
vi el amanecer brillar.`,
  },
  2: {
    titulo: 'Amanecer',
    texto: `...`,
  },
  3: {
    titulo: 'Amanecer',
    texto: `Sé que aquellas palabras fueron difíciles de creer,
y juré no rendirme ante mis propias decisiones.`,
  },
  4: {
    titulo: 'Amanecer',
    texto: `Quiero que tú, y solo tú, entiendas mi mañana.
Al darme un tiempo que fue difícil de soñar.`,
  },
  5: {
    titulo: 'Amanecer',
    texto: `¿Quién soy para ti?
¿Un recuerdo o un pensamiento?`,
  },
  6: {
    titulo: 'Amanecer',
    texto: `Más allá del amanecer, más allá del amanecer,
aún hay tantas cosas que quiero contarte.`,
  },
  7: {
    titulo: 'Amanecer',
    texto: `Que con amor, que con amor,
en una carta no puedo expresar.`,
  },
  8: {
    titulo: 'Amanecer',
    texto: `Con mis pequeños deseos,
busqué el amanecer.`,
  },
  9: {
    titulo: 'Amanecer',
    texto: `...`,
  },
  10: {
    titulo: 'Amanecer',
    texto: `Oye, ¿recuerdas aquel día donde empecé a sonreír?
Quiero hablarte de ello, en este momento sin parar.`,
  },
  11: {
    titulo: 'Amanecer',
    texto: `Y sentir lo fugaz que es el pasar del tiempo,
al valorar este hermoso momento.`,
  },
  12: {
    titulo: 'Amanecer',
    texto: `A veces dudo y me detengo,
es que no quiero vivir en la soledad.`,
  },
  13: {
    titulo: 'Amanecer',
    texto: `Mis sentimientos, mis sentimientos.
Si los compartimos, viviremos por siempre.`,
  },
  14: {
    titulo: 'Amanecer',
    texto: `Aunque me pierda, me pierda,
serás esa luz que me guíe al vivir.`,
  },
  15: {
    titulo: 'Amanecer',
    texto: `Con esos pequeños deseos, quise encontrarte.`,
  },
  16: {
    titulo: 'Amanecer',
    texto: `La, la, La...`,
  },
  17: {
    titulo: 'Amanecer',
    texto: `Mira, después de todo lo sufrido,
solo sonrisas encontrarás.`,
  },
  18: {
    titulo: 'Amanecer',
    texto: `Más allá del amanecer, más allá del amanecer,
aún hay tantas cosas que quiero contarte.`,
  },
  19: {
    titulo: 'Amanecer',
    texto: `Qué con tanto amor, con tanto error,
mis acciones no pudieron expresar.`,
  },
  20: {
    titulo: 'Amanecer',
    texto: `Solo júrame que siempre
sonreirás siendo tú, no cambies jamás.`,
  },
  21: {
    titulo: 'Amanecer',
    texto: `Que con mi amor, con mi amor...
protegida siempre estarás.`,
  },
  22: {
    titulo: 'Amanecer',
    texto: `Entonces, dime... ¿seré pasado o futuro?`,
  },
  23: {
    titulo: 'Amanecer',
    texto: `We Are.`,
  },
};

const TOTAL_PAGINAS = Object.keys(cartas).length;

// ─── COMPONENTE PRINCIPAL ──────────────────────────────────────────────────
export default function CartaMusical() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [sincronizacionActiva, setSincronizacionActiva] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  // Sincronización automática música → página
  useEffect(() => {
    if (!sincronizacionActiva) return;

    for (let pagina = 1; pagina <= TOTAL_PAGINAS; pagina++) {
      const { inicio, fin } = tiemposPaginas[pagina];
      if (currentTime >= inicio && currentTime <= fin) {
        setCurrentPage(pagina);
        break;
      }
    }
  }, [currentTime, sincronizacionActiva]);

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const goToNextPage = () => {
    if (currentPage < TOTAL_PAGINAS) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToCancionOriginal = () => {
    window.open('https://www.youtube.com/watch?v=esqjWMMrhFo&list=RDesqjWMMrhFo&start_radio=1', '_blank');
  };

  const activarSincronizacion = () => setMostrarModal(true);

  const confirmarSincronizacion = () => {
    setSincronizacionActiva(true);
    setMostrarModal(false);
    if (!isPlaying && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const desactivarSincronizacion = () => setSincronizacionActiva(false);

  const carta = cartas[currentPage];

  return (
    <div
      className="carta-container"
      style={{ '--bg-image': `url(${IMAGE_SRC})` }}
    >
      <audio ref={audioRef} src={AUDIO_SRC} loop />

      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-contenido">
            <h2 className="modal-titulo">Sincronización con la música</h2>
            <p className="modal-texto">
              La letra se adaptará al ritmo de la canción automáticamente.
              Las páginas cambiarán según el tiempo de la música.
            </p>
            <button onClick={confirmarSincronizacion} className="modal-boton">
              Activar
            </button>
          </div>
        </div>
      )}

      <div className="carta-wrapper">
        <div className="carta-box">
          <h1 className="carta-titulo">{carta.titulo}</h1>
          <div className="carta-texto">{carta.texto}</div>

          {currentPage < TOTAL_PAGINAS && !sincronizacionActiva && (
            <div className="flecha-container">
              <button onClick={goToNextPage} className="flecha-button">
                <span className="flecha-text">Continuar leyendo</span>
                <ChevronDown className="flecha-icon" />
              </button>
            </div>
          )}

          {sincronizacionActiva && (
            <div className="sincronizacion-activa">
              <Radio className="sincronizacion-icon" />
              <span>Sincronización activa</span>
            </div>
          )}
        </div>

        <div className="botones-container">
          <button onClick={togglePlay} className="boton boton-musica">
            {isPlaying ? (
              <>
                <Pause className="boton-icon" />
                Pausar Música
              </>
            ) : (
              <>
                <Play className="boton-icon" />
                Reproducir Música
              </>
            )}
          </button>

          <button onClick={goToCancionOriginal} className="boton boton-carta">
            <ExternalLink className="boton-icon" />
            Ver canción original
          </button>
        </div>

        <div className="sincronizacion-container">
          {!sincronizacionActiva ? (
            <button onClick={activarSincronizacion} className="boton-sincronizacion">
              <Radio className="boton-icon" />
              Activar Sincronización
            </button>
          ) : (
            <button
              onClick={desactivarSincronizacion}
              className="boton-sincronizacion activo"
            >
              <Radio className="boton-icon" />
              Desactivar Sincronización
            </button>
          )}
        </div>

        <div className="tiempo-container">
          <Clock className="tiempo-icon" />
          <span className="tiempo-texto">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>

        <div className="indicador-paginas">
          {Array.from({ length: TOTAL_PAGINAS }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => !sincronizacionActiva && setCurrentPage(page)}
              className={`indicador-punto ${currentPage === page ? 'activo' : ''}`}
              disabled={sincronizacionActiva}
            />
          ))}
        </div>
      </div>
    </div>
  );
}