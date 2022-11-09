const projects = [
  {
    name: 'La Rienda World Tour',
    description: "A website created for my first project in Microverse program",
    image: 'LaRiendaWorldTour.png',
    technologies: ['css', 'html', 'JavaScript'],
    liveLink: 'https://mperezbazan.github.io/CapstoneProject_1/',
    sourceLink: 'https://github.com/mperezbazan/CapstoneProject_1',
  },
  {
    name: 'ToDo List',
    description: "A simple ToDo List, made with Javascript",
    image: 'ToDoList.png',
    technologies: ['HTML', 'JavaScript', 'Webpack'],
    liveLink: 'https://mperezbazan.github.io/Todolist/dist',
    sourceLink: 'https://github.com/mperezbazan/Todolist',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    image: 'Snapshoot-Data.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: 'https://mperezbazan.github.io/',
    sourceLink: 'https://github.com/mperezbazan',
  },
  {
    name: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    image: 'Snapshoot-Website.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: 'https://mperezbazan.github.io/',
    sourceLink: 'https://github.com/mperezbazan',
  },
  {
    name: 'Profesional Art Printing Data More',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    image: 'Snapshoot-Professional.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: 'https://mperezbazan.github.io/',
    sourceLink: 'https://github.com/mperezbazan',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    image: 'Snapshoot-Data.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: 'https://mperezbazan.github.io/',
    sourceLink: 'https://github.com/mperezbazan',
  },
  {
    name: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    image: 'Snapshoot-Website.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: 'https://mperezbazan.github.io/',
    sourceLink: 'https://github.com/mperezbazan',
  },
];

const closeBtn = document.querySelector('.close-button');
const mobileContainer = document.querySelector('.menu-mobile-container');
const hamburgerBtn = document.querySelector('#hamburger-button');
const menuBtn = document.querySelectorAll('.menu-button');
const closeModalButton = document.querySelector('.modal-button-close');
const modal = document.querySelector('#project-modal');
function toggleMenu() {
  mobileContainer.classList.toggle('display-none');
}
closeBtn.addEventListener('click', toggleMenu);
hamburgerBtn.addEventListener('click', toggleMenu);
menuBtn.forEach((item) => {
  item.addEventListener('click', toggleMenu);
});
closeModalButton.addEventListener('click', () => {
  modal.classList.add('display-none');
});

const container = document.getElementById('Portfolio');
projects.forEach((project, index) => {
  const article = document.createElement('article');
  article.id = `project-${index}`;
  let test = '';
  if (index === 0) {
    article.classList.add('work-container', 'work-main');
    test += `
      <div class="work-main-image-container">
        <img class="work-main-image" src="./images/${project.image}"/>
      </div>
      <div class="work-main-content">
        <h3 class="work-title light">
          ${project.name}
        </h3>
        <p class="work-text light">
          ${project.description}
        </p>
        <ul class="work-tag-group">`;
    project.technologies.forEach((element) => {
      test += `<li class="work-tag light">${element}</li>`;
    });
    test += `
        </ul>
        <div class="work-footer-container-light">
          <a class="button project-button" id='btn-${index}'>
            See Project
          </a>
        </div>
      </div>
    </article>`;
  } else {
    article.classList.add('work-container', 'bg-image');
    if (index === 2 || index === 5) {
      article.classList.add('data-image');
    }
    if (index === 3 || index === 6) {
      article.classList.add('website-image');
    }
    if (index === 1 || index === 4) {
      article.classList.add('professional-image');
    }
    test += `
      <div class="work-content-dark">
        <h3 class="work-title dark">
          ${project.name}
        </h3>
        <p class="work-text dark">
          ${project.description}
        </p>
        <ul class="work-tag-group">`;
    project.technologies.forEach((element) => {
      test += `<li class="work-tag-dark">${element}</li>`;
    });
    test += `
        </ul>
      </div>
      <div class="work-footer-container-dark lg-none">
        <a class="project-button work-button button dark fullwidth" id="btn-${index}">
          See Project
        </a>
      </div>
    </article>`;
  }
  article.innerHTML = test;
  container.appendChild(article);
});
const showModal = (id) => {
  const index = id.substring(id.indexOf('-') + 1, id.length);
  modal.classList.remove('display-none');
  const modalTitle = document.querySelector('.modal-title');
  const modalImage = document.querySelector('.modal-image');
  const modalText = document.querySelector('.modal-text');
  const modalLiveButton = document.getElementById('liveButton');
  const modalSourceButton = document.getElementById('sourceButton');
  const modalTechnologies = document.querySelector('.modal-tags');
  modalTitle.textContent = projects[index].name;
  modalText.textContent = projects[index].description;
  modalTechnologies.innerHTML = '';
  projects[index].technologies.forEach((technology) => {
    const liTechnologies = document.createElement('li');
    liTechnologies.innerHTML = `<li class="work-tag light modal-tag">${technology}</li>`;
    modalTechnologies.appendChild(liTechnologies);
  });
  modalImage.src = `./images/${projects[index].image}`;
  modalLiveButton.href = projects[index].liveLink;
  modalSourceButton.href = projects[index].sourceLink;
};
const cards = document.querySelectorAll('.bg-image');
cards.forEach((card) => {
  card.addEventListener('mouseenter', (e) => {
    e.target.classList.toggle('pointer');
    const textShow = e.target.querySelector('.work-content-dark');
    textShow.classList.toggle('invisible');
    const buttonShow = e.target.querySelector('.work-footer-container-dark');
    buttonShow.classList.toggle('lg-none');
  });
  card.addEventListener('mouseleave', (e) => {
    e.target.classList.toggle('pointer');
    const textShow = e.target.querySelector('.work-content-dark');
    textShow.classList.toggle('invisible');
    const buttonShow = e.target.querySelector('.work-footer-container-dark');
    buttonShow.classList.toggle('lg-none');
  });
  card.addEventListener('click', (e) => {
    const { id } = e.target;
    showModal(id);
  });
});
const buttons = document.querySelectorAll('.project-button');
buttons.forEach((button) => {
  button.addEventListener('touchend', (e) => {
    const { id } = e.target;
    showModal(id);
  });
  button.addEventListener('click', (e) => {
    const { id } = e.target;
    showModal(id);
  });
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { email } = form.elements;
  const emailRegex = /[A-Z]/;
  const message = email.parentNode.querySelector('small');
  if (emailRegex.test(email.value)) {
    message.textContent = 'You can only use Lowercase, please modify the email address and try again';
  } else {
    message.textContent = '';
    form.submit();
  }
});