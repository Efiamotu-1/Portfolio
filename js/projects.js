const project = document.querySelector('.projects');
const modal = document.querySelector('.modal-container');
const modalContainer = document.querySelector('.modal-container');
// const closeModal = document.querySelector('#modal-close')
const featuredProject = document.querySelector('.featured-project');

const featuredProjectdata = {
  name: 'Multi-Post Stories',
  image: '../images/featured.png',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  languages: [
    'HTML',
    'Css',
    'Javascript',
  ],
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
<button class="btn button" type="button">
  See Projects         
</button>
</div>
`;

const projectData = [
  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
  },
  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
  },
  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
  },
  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
  },
  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
  },
  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
  },
];

project.innerHTML = projectData.map((project) => (
  `<div class="second-project project"> 
      <h4 class="project-title">${project.name}</h4>
      <p class="project-desc">
      ${project.description}
      </p>
      <ul class="project-techs">
        ${project.languages.map((lang) => `<li>${lang}</li>`).join('')}
      </ul>
      <button type="submit" class="check-project">
      See Project
    </button>
    </div>
    `
)).join('');

const modalCardData = [
  {
    name: 'Data Dashboard Healthcare ',
    image: '../images/Snapshoot Portfolio.png',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi assumenda temporibus autem voluptates, nemo vero culpa optio quae? Tempora aliquam maxime tenetur iusto vero minima similique illum recusandae est deleniti!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt corrupti cupiditate quaerat quod assumenda tempore, eius temporibus officia error asperiores quasi! Tempora iusto quaerat nam voluptatibus, facere iure exercitationem.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis harum laboriosam saepe? Placeat culpa quo dolorum soluta. Beatae, blanditiis saepe aliquam id alias iusto rem voluptatibus, provident doloremque hic odit?`,
    languages: [
      'HTML',
      'Bootstrap',
      'Ruby on Rails',
    ],

  },
];

modal.innerHTML = modalCardData.map((modal) => (
  `
    <div class="modal" id="modal">
    <div class="modal-header">
      <h2 id="modal-title">${modal.name} </h2>
      <span class="modal-close" id ="modal-close">&times;</span>
    </div>
    <div id="modal-languages">
      <ul class="works-categories">
        ${modal.languages.map((langSkill) => `<li class="work-skills">${langSkill}</li>`).join('')}     
        </ul>
    </div>
    <div class="modal-content">
      <div class="featured-image">
        <img id="project-image" src="${modal.image}" alt="Project Preview">
      </div>
      <div class="content">
        <p id="modal-description"> 
         ${modal.description}
        </p>
        <div id="link-container" class="link-container">
          <a id="live-link" class="button live-icon" href="#" target="new">See Live</a>
          <a id="source-link" class="button source-icon" href="#" target="new">See Source</a>
        </div>
      </div>
    </div>
  </div>
    `
)).join('');
const openModal = document.querySelectorAll('.button, .check-project');
// const container = document.querySelector('.container-element');
openModal.forEach((open) => {
  open.addEventListener('click', () => {
    modalContainer.style.display = 'block';
    // container.style.filter = 'blur(5px)'
  });
});

const closeModal = document.querySelector('#modal-close');
closeModal.addEventListener('click', () => {
  modalContainer.style.display = 'none';
  // container.style.filter = 'none'
});
