// local reviews data
const reviews = [
  {
    id: 1,
    name: "Erwin Smith",
    job: "Commander",
    img:
      "https://i.pinimg.com/736x/88/7e/7b/887e7b48be6bf4d97b04e919e6e89277.jpg",
    text:
      "If we only focus on making the best moves, we will never get the better of our opponent. When necessary, we must be willing to take big risks, and be prepared to lose everything. Unless we change how we fight, we cannot win.",
  },
  {
    id: 2,
    name: "Levi Ackerman",
    job: "Survey Corps Captain",
    img:
      "https://i.pinimg.com/474x/c6/15/f2/c615f2964cba3137c8cf8c554721cb08.jpg",
    text:
      "I don't know which option you should choose. I could never advise you on that... No matter what kind of wisdom dictates you the option you pick, no one will be able to tell if it's right or wrong until you arrive to some sort of outcome from your choice.",
  },
  {
    id: 3,
    name: "Eren Yeager",
    job: "Squad Member",
    img:
      "https://images.saymedia-content.com/.image/t_share/MTc5NjQ1ODEzMTgwNDA5ODE2/the-tragedy-of-eren-yeager-how-the-character-changes-throughout-attack-on-titan.png",
    text:
      "I want to see and understand the world outside. I don’t want to die inside these walls without knowing what’s out there. I will fight and I will see the outside world and I finally I will be free",
  },
  {
    id: 4,
    name: "Mikasa Ackerman",
    job: "Best Girl :3",
    img:
      "https://i.pinimg.com/originals/9c/fd/82/9cfd82435cd64fad07e74cdeeb434a55.png",
    text:
      "There are only so many lives I can value. And I decided who those people were six years ago. So you shouldn’t try to ask for my pity. Because right now, I don’t have time to spare or room in my heart.",
  },
];

// Select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item

let currentItem = 0;

// load initil items

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

//  show person based on item

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show prev person

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// show random person

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson();
});
