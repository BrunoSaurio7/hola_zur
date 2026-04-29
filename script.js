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
    title: "tu musiquita y los valores que me has mostrado 🤓☝️",
    text: "increible que tengamos un 96% en nuestro blend de spoti, eres la persona con la que más comparto gustos musicales, me gusta mucho que sea así y que seas tu esa persona 🙂‍↔️ Además, me gusta mucho que seas tan sensible y tu pasión por los animales y su bienestar. Por lo que he visto de ti, sé que amas mucho a tus seres queridos y lo demuestras de muchas formas, me gusta que seas así y que hagas piñatas de tesis 🙂‍↔️",
    image: "assets/golden-3.png",
    caption: "ayayay"
  },
  {
    number: "04",
    meta: " ",
    title: "me transmites mucha calma 😌",
    text: "hay algo de ti que todavía no logro descifrar que me da tanta calma, tal vez es porque de verdad quisieras ser una piedra en marte y estar tranquila ahí sin que nadie te moleste JAJAJAJA, pero esa forma de ser tan tuya tal vez sea la causa de que me sienta esa calma al estar a tu lado o al pensarte todo el día. Me gusta ese sentimiento que generas en mí, le das paz y plenitud a mi alma, calmas 😌",
    image: "assets/gelada-2.png",
    caption: "ola"
  },
  {
    number: "05",
    meta: " ",
    title: "el silencio es tan cómodo contigo",
    text: "muchas veces solamente quiero estar en silencio y contigo es muy cómodo hacerlo, no se siente esa extraña incomodidad de querer sacar un tema de conversación, me gusta que no sienta ese sentimiento cuando estoy contigo 🙂‍↔️",
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
