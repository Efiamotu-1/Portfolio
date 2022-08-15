const project = document.querySelector('.projects');
const modal = document.querySelector('.modal-container');
const featuredProject = document.querySelector('.featured-project');
const container = document.querySelector('.container-element');

const featuredProjectdata = {
  id: 0,
  name: 'Roll A Dice',
  image: './images/roll-dice.png',
  imageUrl: './images/roll-dice.png',
  description: 'This project features a dice game between two players. Each players is allowed to roll a dice as many times as possible to win the game and the player who first reaches a score above 100 wins the game, However if a player rolls 1, his total score reverts to 0 and the game shifts to the next player who gets to roll next and try his luck, Each player can also hold to save and protect his score. The game can also be refresh to begin a new round. Once a player wins the game his tab displays a dark background.',
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
  See Projects         
</button>
</div>
`;

const projectData = [
  {
    id: 1,
    image: 'first',
    imageUrl: '../images/wa.png',
    name: 'Weather App',
    description: "This project is a weather app that displays weather information for different cities. these information is generated using data from accu weather api, i.e this website employs the use of api's to populate its contents and display weather information about a particular city",
    languages: [
      'HTML',
      'CSS',
      'Javascript',
      'API',
    ],
    liveUrl: 'https://efiamotu-1.github.io/Weather-App/',
    sourceUrl: 'https://github.com/Efiamotu-1/Weather-App',

  },
  {
    id: 2,
    image: 'second',
    imageUrl: '../images/lmun.png',
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
    imageUrl: '../images/todo1.png',

    description: 'This is a todo list app which can be very useful in setting goals and objectives for the day or week. It can also serve as a reminder for completion of tasks. This app not only sets out your todos but also gives you the opportunity to search for todos by filtering the todos with provided search words',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
    liveUrl: 'https://efiamotu-1.github.io/To-do-List-with-filter',
    sourceUrl: 'https://github.com/Efiamotu-1/To-do-List-with-filter',

  },
  {
    id: 4,
    name: 'Bankist App',
    image: 'fourth',
    imageUrl: '../images/bk.png',

    description: 'The Website was built fully functional with javascript, it uses dom manipulation to update the html dynamically with effects that makes the whole website interactive and user friendly',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
    liveUrl: 'https://efiamotu-1.github.io/Bankist-App',
    sourceUrl: 'https://github.com/Efiamotu-1/Bankist-App',

  },
  {
    id: 5,
    image: 'fifth',
    imageUrl: '../images/guess.png',
    name: 'Guess My Number',
    description: 'This project is a game of guessing a random number between 1 & 20, Correct number shows a hint detailing whether the guess is too high or too low depending on the closeness of the guess to the randomly generated number. Each guesser has 20 attempts and his fastest attempt is saved. The again button resets the game so that a new guess can begin',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
    liveUrl: 'https://efiamotu-1.github.io/Guess-my-number',
    sourceUrl: 'https://github.com/Efiamotu-1/Guess-my-number',

  },
  {
    id: 6,
    name: 'Interactive Quiz App',
    image: 'sixth',
    imageUrl: '../images/iq.png',

    description: 'This project is an interactive Quiz website where users are required to answer a number of questions to test their knowledge.',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
    liveUrl: 'https://efiamotu-1.github.io/Interactive-Quiz',
    sourceUrl: 'https://github.com/Efiamotu-1/Interactive-Quiz',

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
