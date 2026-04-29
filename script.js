const timelineItems = [
  {
    number: "01",
    meta: "primer momento · inicio",
    title: "Cuando empezó a llamar mi atención",
    text: "Aquí va el primer párrafo. Puedes contar cómo fue que Zur empezó a gustarte desde algo pequeño: una forma de hablar, una manera de estar, una energía particular o una impresión inicial que se fue quedando contigo. La idea de este bloque es que parezca el arranque de una historia emocional, sencilla y honesta, sin exagerar demasiado, pero dejando claro que desde ahí algo empezó a moverse y ya no se fue.",
    image: "assets/golden-2.png",
    caption: "Detalle visual: un mono dorado real para acompañar el inicio."
  },
  {
    number: "02",
    meta: "segundo momento · rojo",
    title: "Lo rojo también empezó a recordármela",
    text: "En este bloque puedes hablar de su color favorito y de cómo eso fue tomando sentido dentro de tu manera de verla. El rojo puede sentirse intenso, elegante, cálido y directo. Puedes escribir sobre ropa, luces, objetos, conversaciones o cualquier momento en el que ese color se volvió una especie de vínculo visual con Zur. La intención aquí es que la página se sienta coherente con sus gustos y con la estética general del proyecto.",
    image: "assets/gelada-1.png",
    caption: "Contraste visual con una imagen real de gelada."
  },
  {
    number: "03",
    meta: "tercer momento · gustos",
    title: "Sus gustos tienen algo muy suyo",
    text: "Este apartado sirve para hablar de por qué sus gustos te parecen especiales. Que le guste el mono dorado, por ejemplo, no se siente genérico: se siente curioso, bonito y con mucha personalidad. Aquí puedes desarrollar la idea de que no solo te gusta Zur por cómo se ve o por lo que dice, sino también por ese universo de detalles que la vuelven única y fácil de recordar incluso cuando no está presente.",
    image: "assets/golden-3.png",
    caption: "Otra imagen real para reforzar el motivo del mono dorado."
  },
  {
    number: "04",
    meta: "cuarto momento · música",
    title: "La música también me ayuda a entenderla",
    text: "Aquí puedes conectar sus artistas favoritos con la sensación general que te provoca. Rusowsky, Jesse Baez y aquihayaquihay tienen una vibra emocional, suave, moderna y a ratos nocturna. Puedes explicar que su gusto musical hace que Zur se sienta como alguien con una sensibilidad concreta, de esas personas que parecen venir ya acompañadas por un soundtrack. Este bloque funciona muy bien como antesala para el reproductor musical del final.",
    image: "assets/gelada-2.png",
    caption: "Imagen de apoyo para mantener la mezcla visual del fondo."
  },
  {
    number: "05",
    meta: "quinto momento · conclusión",
    title: "Al final no fue una sola cosa",
    text: "En el cierre puedes decir que no hubo un motivo único, sino una acumulación de detalles. Su estilo, sus gustos, su vibra, su manera de estar y la forma en la que todo eso fue dejando huella hicieron que gustarte se volviera algo natural. Este último texto puede sonar un poco más confesional, como si ya no estuvieras explicando una hipótesis, sino aceptando con calma una conclusión que llevaba tiempo formándose.",
    image: "assets/gelada-3.png",
    caption: "Cierre visual con otro retrato real."
  }
];

// Cambia este link por el embed que quieras usar
// Ejemplo Spotify: https://open.spotify.com/embed/track/ID_DE_CANCION?utm_source=generator
const songEmbedUrl = "https://open.spotify.com/embed/track/2lTm559tuIvatlT1u0JYG2?utm_source=generator";

const timelineContent = document.getElementById("timelineContent");

timelineItems.forEach((item) => {
  const article = document.createElement("article");
  article.className = "chapter";
  article.innerHTML = `
    <div class="chapter-number">${item.number}</div>

    <div class="chapter-copy">
      <div class="chapter-meta">${item.meta}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>

    <figure>
      <img src="${item.image}" alt="${item.title}">
      <figcaption>${item.caption}</figcaption>
    </figure>
  `;
  timelineContent.appendChild(article);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.18 });

document.querySelectorAll(".chapter").forEach(chapter => observer.observe(chapter));

const loadSongButton = document.getElementById("loadSong");
const musicPlayer = document.getElementById("musicPlayer");

loadSongButton.addEventListener("click", () => {
  musicPlayer.innerHTML = `
    <iframe
      title="Reproductor de canción"
      src="${songEmbedUrl}"
      loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
    </iframe>
  `;
});
