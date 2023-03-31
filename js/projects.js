const project = document.querySelector('.projects');
const modal = document.querySelector('.modal-container');
const featuredProject = document.querySelector('.featured-project');
const container = document.querySelector('.container-element');

const featuredProjectdata = {
  id: 0,
  name: 'Roll A Dice',
  image: './images/roll-dice.png',
  imageUrl: './images/roll-dice.png',
  description: 'This project features a dice game between two players. Each player is allowed to roll a dice as many times as possible to win the game and the player who first reaches a score above 100 wins the game, However if a player rolls 1, his total score reverts to 0 and the turn shifts to the next player who gets to roll next and try his luck, Each player can also hold to save and protect his score. The game can also be refreshed to begin a new round. Once a player wins the game his tab displays a dark background.',
  languages: [
    'HTML',
    'Css',
    'Javascript',
  ],
  liveUrl: 'https://efiamotu-1.github.io/Roll-A-Dice',
  sourceUrl: 'https://github.com/Efiamotu-1/Roll-A-Dice',

};

featuredProject.innerHTML = `
<div class="featured-image">
<img src="${featuredProjectdata.image}" alt="feature project">
</div>
<div class="featured-content">

 <h3 class="featured-content-title">${featuredProjectdata.name}</h3>
<p class="featured-content-para">${featuredProjectdata.description}</p>     
<ul class="works-categories">

  ${featuredProjectdata.languages.map((featLang) => `<li class="work-skills">${featLang}</li>`).join('')}
</ul>
<button class="btn button modal-button" id="${featuredProjectdata.id}"  type="button">
  See Project         
</button>
</div>
`;

const projectData = [
  {
    id: 1,
    image: 'first',
    imageUrl: './images/tva.png',
    name: 'Awesome Tv series',
    description: "A pair-programming project using TV-series API and Involvement API to showcase TV series and submit comments",
    languages: [
      'HTML',
      'CSS',
      'Javascript',
      'TV-Maze API',
    ],
    liveUrl: 'https://mullenlucas.github.io/tv-series-showcase/dist/',
    sourceUrl: 'https://github.com/Efiamotu-1/tv-series-showcase',

  },
  {
    id: 2,
    image: 'second',
    imageUrl: './images/lmun.png',
    name: 'Lagos Model United Nations(LMUN)',
    description: 'This website gives information about the prestigious lagos model united nation which is a simulation of the united nations General Assembly. It is an event attended by thousands of university students from different tertiary institutions within and outside africa.',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
    liveUrl: 'https://efiamotu-1.github.io/Capstone-Project/',
    sourceUrl: 'https://github.com/Efiamotu-1/Capstone-Project',

  },
  {
    id: 3,
    name: 'Todo List App',
    image: 'third',
    imageUrl: './images/todo-1.png',

    description: 'This is a todo list app that helps track your daily goals and objectives, it can be a very useful and helpful application if you have specific goals for the day or week and you want to keep track and complete them. It was built using HTML, CSS, and JavaScript, ES6 Modules and Webpack and it runs test using jest',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
    liveUrl: 'https://efiamotu-1.github.io/To-do-list/dist/',
    sourceUrl: 'https://github.com/Efiamotu-1/To-do-list',

  },
  {
    id: 4,
    name: 'Rent a car',
    image: 'fourth',
    imageUrl: './images/car-det.png',

    description: 'Rent a Car is a a car rental application. It allows users to create an account, login, and book a car for a specific period of time. It also allows users to view all available cars, and view a specific car. It also allows users to view all bookings made by a specific user.',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
      'React',
      'Redux',
      'Ruby',
      'Rails',
    ],
    liveUrl: 'rent-a-car-seven.vercel.app',
    sourceUrl: 'https://github.com/didierganthier/rent-a-car',

  },
  {
    id: 5,
    image: 'fifth',
    imageUrl: './images/bookstore-cms.png',
    name: 'Bookstore CMS',
    description: 'The Bookstore is a website where the user can view a list of books, add a book by entering a title, an author, and a category, and remove a book.',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
      'React',
      'Redux',
    ],
    liveUrl: 'https://reactbookstoreapp.netlify.app/',
    sourceUrl: 'https://github.com/Efiamotu-1/Bookstore',

  },
  {
    id: 6,
    name: 'Awesome Books',
    image: 'sixth',
    imageUrl: './images/awe-book.png',

    description: 'This is a single page application built using HTML, CSS, and JavaScript. it allows you to add and remove books and displays a list of books as well as contact information',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
    liveUrl: 'https://efiamotu-1.github.io/Awesome-Books/',
    sourceUrl: 'https://github.com/Efiamotu-1/Awesome-Books',

  },
];

project.innerHTML = projectData.map((project) => (
  `<div class="${project.image}-project project"> 
      <button id=${project.id} class="check-project modal-button">
      See Project
    </button>
    </div>
    `
)).join('');

const newArray = [featuredProjectdata, ...projectData];
const openModal = (id) => {
  container.style.filter = 'blur(5px)';
  modal.style.display = 'block';
  modal.style.background = '#eee';

  modal.innerHTML = `
          <div class="modal" id="modal">
          <div class="modal-header">
            <h2 id="modal-title">${newArray[id].name}</h2>
            <span class="modal-close" id ="modal-close">&times;</span>
          </div>
          <div id="modal-languages">
            <ul class="works-categories">
              ${newArray[id].languages.map((langSkill) => `<li class="work-skills">${langSkill}</li>`).join('')}     
              </ul>
          </div>
          <div class="modal-content">
            <div class="featured-image">
              <img id="project-image" src="${newArray[id].imageUrl}" alt="Project Preview">
            </div>
            <div class="content">
              <p id="modal-description"> 
               ${newArray[id].description}
              </p>
              <div id="link-container" class="link-container">
                <a id="live-link" class="button live-icon" href="${newArray[id].liveUrl}" target="new">See Live</a>
                <a id="source-link" class="button source-icon" href="${newArray[id].sourceUrl}" target="new">See Source</a>
              </div>
            </div>
          </div>
        </div>
          `;
};

const openModalButton = document.querySelectorAll('.modal-button');
const buttonsArray = [...openModalButton];
buttonsArray.forEach((button) => {
  button.addEventListener('click', (e) => {
    const { id } = e.target;
    openModal(id);
    const closeModal = document.getElementById('modal-close');
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
      container.style.filter = 'none';
    });
  });
});
