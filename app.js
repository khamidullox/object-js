let aboutMe = {
  ism: "Hamidullo",
  yosh: 18,
  yashashJoyi: "Margilon",
  friend: {
    ism: "Begzod",
    yosh: 18,
  },
  oqishJoyi: "Maktab 6",
  tillar: ["Ruscha", "Nemischa", "Inglizcha"],
};

let ism = "Hamidullo";

let user = {
  name: "Hamidullo",
  age: "18",
  lang: ["uzbek", "rus", "ingliz", "turk"],
  movie: [
    { kino: "Avatar", like: Math.trunc(1000 * Math.random() + 1), year: 1980 },
    {
      kino: "Orgimchak odam",
      like: Math.trunc(1000 * Math.random() + 1),
      year: 2001,
    },
    { kino: "Dedpool", like: Math.trunc(1000 * Math.random() + 1), year: 2015 },
    {
      kino: "A.N.K.E.L",
      like: Math.trunc(1000 * Math.random() + 1),
      year: 2000,
    },
  ],
  movieWatch: function () {
    this.movie.forEach((film) => {
      console.log(`Film ${film.kino} liklari ${film.like}`);
    });
  },
};
user.movieWatch();

const movie = [
  { kino: "Avatar", like: Math.trunc(1000 * Math.random() + 1), year: 1980 },
  {
    kino: "Orgimchak odam",
    like: Math.trunc(1000 * Math.random() + 1),
    year: 2001,
  },
  { kino: "Dedpool", like: Math.trunc(1000 * Math.random() + 1), year: 2015 },
  { kino: "A.N.K.E.L", like: Math.trunc(1000 * Math.random() + 1), year: 2000 },
];

const movieYear = [];
movie.forEach((item) => {
  if (item.year > 2000) {
    movieYear.push(item);
  }
});

console.log(movieYear);

const movieFiltr = movie.filter((item)=>{
  return item.year < 2015
})
console.log(movieFiltr)