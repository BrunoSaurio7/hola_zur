const timelineItems = [
  {
    number: "01",
    tag: "primer momento",
    artist: "rusowsky mood",
    title: "Cuando apareció sin hacer ruido",
    text: "Aquí va el primer texto de la cronología. La idea es contar cómo empezó a gustarte Zur, no necesariamente con una escena enorme, sino con una sensación pequeña que se quedó dando vueltas. Puedes hablar de su forma de mirar, de cómo habla, de algo que dijo sin darse cuenta o de ese primer detalle que hizo que quisieras conocerla más.",
    visual: "record"
  },
  {
    number: "02",
    tag: "detalle rojo",
    artist: "color favorito",
    title: "Lo rojo empezó a tener otro sentido",
    text: "Este apartado puede hablar de cómo su color favorito se volvió parte de la forma en que la recuerdas. El rojo puede sentirse intenso, bonito, elegante y medio peligroso, como una señal que llama la atención sin pedir permiso. Aquí puedes escribir sobre una prenda, una vibra, una conversación o un momento donde todo se sintió más vivo.",
    visual: "flower"
  },
  {
    number: "03",
    tag: "mono dorado",
    artist: "animal favorito",
    title: "La ternura rara de sus gustos",
    text: "En este punto puedes explicar que te gusta porque sus gustos tienen personalidad. Que su animal favorito sea el mono dorado dice algo lindo: algo curioso, único, brillante y un poco inesperado. Este texto puede ir sobre cómo Zur tiene detalles que no se sienten genéricos, sino muy suyos, y por eso se vuelven fáciles de recordar.",
    visual: "wave"
  },
  {
    number: "04",
    tag: "soundtrack",
    artist: "Jesse Baez / aquihayaquihay",
    title: "La música como forma de entenderla",
    text: "Aquí puedes conectar sus artistas favoritos con la manera en que la percibes. Rusowsky, Jesse Baez y aquihayaquihay tienen una vibra suave, sentimental, moderna y un poco nocturna. Puedes decir que sus gustos musicales hacen que Zur se sienta como una canción que no necesita explicar demasiado, pero aun así se queda pegada en la cabeza.",
    visual: "star"
  },
  {
    number: "05",
    tag: "conclusión",
    artist: "lo inevitable",
    title: "Cuando ya no era una duda",
    text: "Este último apartado puede cerrar la cronología diciendo que no hubo un único motivo, sino una suma de detalles. Su forma de ser, sus gustos, sus gestos y la manera en que todo eso se fue acumulando hicieron que gustarte dejara de ser una posibilidad y se volviera una certeza tranquila, de esas que se sienten obvias cuando miras hacia atrás.",
    visual: "heart"
  }
];

// Cambia este enlace por el embed de Spotify, YouTube, SoundCloud, etc.
// Ejemplo Spotify:
// const songEmbedUrl = "https://open.spotify.com/embed/track/ID_DE_LA_CANCION?utm_source=generator";
const songEmbedUrl = "https://open.spotify.com/embed/playlist/37i9dQZF1E4CYe9BQ67moO?utm_source=generator";

const timelineContent = document.querySelector("#timelineContent");

timelineItems.forEach((item) => {
  const article = document.createElement("article");
  article.className = "moment";
  article.innerHTML = `
    <div class="dot" aria-hidden="true"></div>

    <div class="moment-card" data-number="${item.number}">
      <div class="moment-meta">
        <span class="pill">${item.tag}</span>
        <span class="pill">${item.artist}</span>
      </div>

      <h2>${item.title}</h2>
      <p>${item.text}</p>

      <div class="visual ${item.visual}" aria-hidden="true"></div>
    </div>
  `;

  timelineContent.appendChild(article);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.22
  }
);

document.querySelectorAll(".moment").forEach((moment) => {
  revealObserver.observe(moment);
});

const musicPlayer = document.querySelector("#musicPlayer");
const loadSongButton = document.querySelector("#loadSong");

loadSongButton.addEventListener("click", () => {
  musicPlayer.innerHTML = `
    <iframe
      title="Reproductor de canción"
      src="${songEmbedUrl}"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy">
    </iframe>
  `;
});

window.addEventListener("mousemove", (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 12;
  const y = (event.clientY / window.innerHeight - 0.5) * 12;

  document.documentElement.style.setProperty("--tilt-x", `${x}px`);
  document.documentElement.style.setProperty("--tilt-y", `${y}px`);
});
