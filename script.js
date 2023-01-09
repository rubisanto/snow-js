
let background = document.getElementById("background");

let creatorInterval = setInterval(() => {
  // Création d'un flocon
  //calculer une position aléatoire, sur la largeur de la page
  let position = Math.floor(Math.random() * window.innerWidth);
  let plan = Math.floor(Math.random() * 3) + 1;

  // Création d'un élément HTML
  let flocon = document.createElement("img");
  flocon.src = "assets/flocon.png";

  // Positionnement du flocon
  flocon.style.top = "-50px";
  flocon.style.left = position + "px";
  flocon.className = `flocon flocon-${plan}`;

  // ajout du flocon dans le DOM
  background.appendChild(flocon);
}, 150);

let moveInterval = setInterval(() => {
  let plan1 = [...document.getElementsByClassName("flocon-1")];
  let plan2 = [...document.getElementsByClassName("flocon-2")];
  let plan3 = [...document.getElementsByClassName("flocon-3")];

  plan1.forEach((item) => {
    let top = item.style.top ?? "-50px";
    top = top.replace("px", "");
    top = parseInt(top);
    item.style.top = top + 3 + "px";
  })

  plan2.forEach((item) => {
    let top = item.style.top ? item.style.top : "-50px";
    top = top.replace("px", "");
    top = parseInt(top);
    item.style.top = top + 2 + "px";
  })

  plan3.forEach((item) => {
    let top = item.style.top ?? "-50px";
    top = top.replace("px", "");
    top = parseInt(top);
    item.style.top = top + 1 + "px";
  })
}, 20);

let removeInterval = setInterval(() => {
  let flocons = [...document.getElementsByClassName("flocon")];
  flocons.filter(item => {
            let top = item.style.top ?? "-50px";
            top = top.replace("px", "");
            top = parseInt(top);
            return top > (window.innerHeight + 50);
          })
          .forEach(item => item.remove());
}, 1000);

background.addEventListener("click", (e) => {
  console.log(e);
  let position = Math.floor(Math.random() * window.innerWidth);
  let plan = Math.floor(Math.random() * 3) + 1;

  // Création d'un élément HTML
  let flocon = document.createElement("img");
  flocon.src = "assets/flocon.png";

  // Positionnement du flocon
  flocon.style.top = `${e.y - 20}px`;
  flocon.style.left = `${e.x - 20}px`;
  flocon.className = `flocon flocon-${plan}`;

  // ajout du flocon dans le DOM
  background.appendChild(flocon);
})