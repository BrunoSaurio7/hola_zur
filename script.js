const timelineItems = [
  {
    number: "01",
    meta: " ",
    title: "estás preciosa 😻",
    text: "yo creo que hasta tú lo sabes pero wow, que hermosos ojos tienes, que bella carita toda chula, tus labios que al besarlos saben deliciosos ñam ñam ñam, tu piel tan suave fua, en fin, eres tan bella y preciosa que no me canso de verte y tocarte yyy lamerte cuando puedo",
    image: "assets/golden-2.png",
    caption: "yo creo que me gustas mas que a ti los monos dorados 🤓☝️"
  },
  {
    number: "02",
    meta: " ",
    title: "me gusta bailar contigo 🙂‍↔️",
    text: "aunque me haya humillado bailando horriblemente JAJAJA la verdad es que amé bailar contigo en nuestra primera cita y más aún en el vive, pero sobre todo que quisieras bailar conmigo con Ruso de fondo pese a que sabías que bailaba dlv JAJAJAJA, por eso ya ando aprendiendo a bailar mejor, porque la vida es un baileee y el mundo es un salón y hay muchas parejas bailando a nuestro al rededor y entre toda esta genteee nos fuimos a encontraaar parecíamos predestinados para así bailaaaaaaar 🗣️",
    image: "assets/gelada-1.png",
    caption: "ya hay que bailar de nuevo eh"
  },
  {
    number: "03",
    meta: " ",
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

// Spotify: https://open.spotify.com/embed/track/ID_DE_CANCION?utm_source=generator
// https://open.spotify.com/intl-es/track/2YxPhQ1j59g44BKvGWobUE?si=ada16895a9bd40fe
const songEmbedUrl = "https://open.spotify.com/embed/track/2YxPhQ1j59g44BKvGWobUE?utm_source=generator";

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
