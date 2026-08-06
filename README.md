⚙️ Requisitos Previos e Instalación
Requisitos:
Node.js: v16.x o superior

npm: v8.x o superior

Instalación:
Ingresar a la carpeta del proyecto:

Bash
cd carta-amanecer
Instalar dependencias:

Bash
npm install lucide-react
🚀 Ejecución en Desarrollo
Para iniciar el servidor local:

Bash
npm start
La aplicación se ejecutará automáticamente en http://localhost:3000.

🎧 Lógica de Sincronización
El componente principal utiliza un objeto con intervalos numéricos en segundos para mapear la pista de audio con el texto:

JavaScript
const tiemposPaginas = {
  1: { inicio: 0, fin: 15 },
  2: { inicio: 15, fin: 22 },
  // ... hasta la página 23
};
Un hook useEffect reacciona al evento timeupdate de la etiqueta HTML5 <audio> para alternar el estado currentPage cuando la opción sincronizacionActiva se encuentra habilitada [cite: 6].

🎨 Diseño y Estilos (CSS)
Fondo con Blur e Iluminación: Uso de ::before y ::after en .carta-container con filter: blur(10px) para lograr un efecto de profundidad de campo [cite: 6].

Animación latido: Aplicada al título con sombreados difuminados (text-shadow) variables [cite: 6].

Modal Flotante: Capa superpuesta con animación de escala e iluminación perimetral para una interacción fluida [cite: 6].
"""

with open("README_CARTA.md", "w", encoding="utf-8") as f:
f.write(readme_carta_content)

print("README para la Carta Musical creado correctamente.")


```text?code_stdout&code_event_index=1
README para la Carta Musical creado correctamente.

Aquí tienes el archivo README.md adaptado al proyecto de la carta musical interactiva "Carta - Amanecer"[cite: 6].

Markdown
# 🎵 Carta Musical: Amanecer

Una aplicación web interactiva y poética desarrollada con **React.js**[cite: 6]. Ofrece una experiencia inmersiva mediante sincronización en tiempo real entre un reproductor de audio, estrofas sincronizadas por tiempo y un diseño visual con efectos de desenfoque y gradientes[cite: 6].

---

## 📋 Tabla de Contenidos

- [📌 Descripción del Proyecto](#-descripción-del-proyecto)
- [✨ Características Principales](#-características-principales)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [⚙️ Requisitos Previos e Instalación](#️-requisitos-previos-e-instalación)
- [🚀 Ejecución en Desarrollo](#-ejecución-en-desarrollo)
- [🎧 Lógica de Sincronización](#-lógica-de-sincronización)
- [🎨 Diseño y Estilos (CSS)](#-diseño-y-estilos-css)

---

## 📌 Descripción del Proyecto

**Carta Musical** combina la lectura lírica paso a paso con la reproducción de audio[cite: 6]. El usuario puede avanzar de forma manual página por página o activar el **modo sincronización**, el cual detecta los tiempos exactos del tema musical `amanecer.mp3` y cambia el texto mostrado automáticamente[cite: 6].

---

## ✨ Características Principales

- **Sincronización Inteligente de Letra y Audio**: Avance automático de 23 secciones líricas mediante mapeo de tiempos exactos (`tiemposPaginas`)[cite: 6].
- **Lógica de Lectura Dual**:
  - *Modo Sincronizado*: El audio controla la transición de páginas[cite: 6].
  - *Modo Libre*: Navegación manual mediante botón de avance e indicadores inferiores de paginación[cite: 6].
- **Modal de Confirmación**: Interfaz previa para advertir e iniciar la reproducción en modo sincronizado[cite: 6].
- **Línea de Tiempo y Controles**: Visualización en formato digital (`mm:ss`) del tiempo transcurrido / total y reproductor interactivo[cite: 6].
- **Enlace Externo**: Botón directo para visualizar la versión/canción original externa[cite: 6].
- **UI/UX Atmosférica**:
  - Imagen de fondo dinámicamente inyectada con efecto *blur* y gradiente azul índigo suave[cite: 6].
  - Tipografía poética combinada con efectos CSS de brillo (*glowing*) y animación de latido para el título[cite: 6].

---

## 🛠️ Tecnologías Utilizadas

- **Core**: [React.js](https://reactjs.org/) (Hooks: `useState`, `useRef`, `useEffect`)[cite: 6]
- **Iconografía**: [Lucide React](https://lucide.dev/) (`Play`, `Pause`, `ExternalLink`, `ChevronDown`, `Clock`, `Radio`)[cite: 6]
- **Estilos**: CSS3 Puro (Variables CSS, Flexbox, Keyframes, Pseudoelementos `::before` / `::after`)[cite: 6]
- **Tipografías**: Google Fonts (*Bebas Neue*, *Crimson Text*, *Georgia*)[cite: 6]

---

## 📁 Estructura del Proyecto

```text
carta-amanecer/
├── public/
│   ├── amanecer.mp3         # Archivo de audio principal
│   └── Katachi.png          # Imagen de fondo atada a la vista
└── src/
    ├── Components/
    │   ├── Carta.js         # Componente lógica principal y controlador de audio
    │   └── Carta.css        # Estilos visuales, animaciones y diseño responsivo
    ├── App.js               # Renderizado del componente Carta
    ├── App.css              # Reseteo global de márgenes y contenedor App
    └── index.js             # Punto de entrada de React
⚙️ Requisitos Previos e Instalación
Requisitos:
Node.js: v16.x o superior

npm: v8.x o superior

Instalación:
Ingresar a la carpeta del proyecto:

Bash
cd carta-amanecer
Instalar dependencias necesarias:

Bash
npm install lucide-react
🚀 Ejecución en Desarrollo
Para iniciar el servidor local:

Bash
npm start
La aplicación se ejecutará automáticamente en http://localhost:3000.

🎧 Lógica de Sincronización
El componente principal utiliza un objeto con intervalos numéricos en segundos para mapear la pista de audio con el texto:

JavaScript
const tiemposPaginas = {
  1: { inicio: 0, fin: 15 },
  2: { inicio: 15, fin: 22 },
  // ... hasta la página 23
};
Un hook useEffect reacciona al evento timeupdate de la etiqueta HTML5 <audio> para alternar el estado currentPage cuando la opción sincronizacionActiva se encuentra habilitada[cite: 6].

🎨 Diseño y Estilos (CSS)
Fondo con Blur e Iluminación: Uso de ::before y ::after en .carta-container con filter: blur(10px) para lograr un efecto de profundidad de campo[cite: 6].

Animación latido: Aplicada al título con sombreados difuminados (text-shadow) variables[cite: 6].

Modal Flotante: Capa superpuesta con animación de escala e iluminación perimetral para una interacción fluida[cite: 6].