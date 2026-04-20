const message = `Je sais que j’ai pas toujours été le meilleur des copains que tu puisses avoir Johanne.Et c’est l’une des plus grandes regrets de ma vie de pas être aussi parfait que tu le mérites. Je suis ni le meilleur le plus beau ni le plus intelligent ou même ni le plus riche au contraire haha, mais avec toi Johanne j’ai envie de me dépasser d’être une meilleure personne pour mériter ton amour et te donner tout l’amour du monde que tu mérites. Tu es celle qui a changée ma vie à jamais. Tu es celle qui m’a fait croire encore que le véritable amour existe parce que je t’aime vraiment d’un amour sincère, inconditionnel, infini, et véritable de tout mon être. Oui Johanne Je t’aime ! Je t’écris cette lettre parce que je veux que tu saches à quel point tu es la plus merveilleuse personne qui puisse exister à mes yeux. Oui ça aurait été mieux je sais si ça aurait été écrite de ma propre écriture mais tu sais bien que ton copain est un chômeur et que ducoup même un stylo il en a pas kkkk. Mais pourtant je veux te faire une lettre d’amour alors ducoup je t’ai fait ça kkk. Tout ces moments passés avec toi que ça soit en vrai ou juste à travers les messages sont les meilleurs moments de toute ma vie sache le Jojo. Désolé aussi je suis pas trop doué pour faire des lettres d’amour mais je l’ai fais quand même.
À toi mon amour, ma chérie , mon bébé d’amour, à toi Johanne la personne que j’aime le plus au monde.
JE T’AIME.
De la part de ton chinois de behoririka.`;

let i = 0;

function startLetter() {
  document.getElementById("letter").classList.remove("hidden");
  typeWriter();
}

function typeWriter() {
  if (i < message.length) {
    document.getElementById("text").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 30);
  }
}

function showFinal() {
  document.getElementById("letter").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");
}

/* Hearts animation */
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for (let i = 0; i < 30; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 5 + 2,
    speed: Math.random() * 1 + 0.5
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "pink";

  hearts.forEach(h => {
    ctx.beginPath();
    ctx.arc(h.x, h.y, h.size, 0, Math.PI * 2);
    ctx.fill();
    h.y -= h.speed;
    if (h.y < 0) h.y = canvas.height;
  });

  requestAnimationFrame(drawHearts);
}

drawHearts();
