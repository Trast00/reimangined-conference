const btnShowMore = document.getElementById('btn-show-more');

/* Load Speaker Dynamically */
const loadSpeakers = (listSpeaker) => {
  const ulListSpeaker = document.getElementById('list-speakers');
  ulListSpeaker.innerHTML = '';
  listSpeaker.forEach((speaker, index) => {
    const liSpeaker = document.createElement('li');
    liSpeaker.classList.add('speaker');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('speaker-img-container');
    const img = document.createElement('img');
    img.src = speaker.image;
    img.alt = 'Speaker Profile Image';
    imgContainer.append(img);

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('descriptions-container');
    const title = document.createElement('h3');
    title.classList.add('speaker-title');
    title.textContent = speaker.name;
    const subtitle = document.createElement('p');
    subtitle.classList.add('speaker-subtitle');
    subtitle.textContent = speaker.subName;
    const line = document.createElement('hr');
    const description = document.createElement('p');
    description.classList.add('speaker-description');
    description.textContent = speaker.biographie;

    descriptionContainer.append(title);
    descriptionContainer.append(subtitle);
    descriptionContainer.append(line);
    descriptionContainer.append(description);

    liSpeaker.append(imgContainer);
    liSpeaker.append(descriptionContainer);

    if (index > 1) {
      liSpeaker.classList.add('hidden');
    }

    ulListSpeaker.append(liSpeaker);
  });
};

const listSpeakers = [
  {
    name: 'Cal Newport', subName: 'Authors of best-sellers, computer science professor at Georgetown University.', biographie: 'graduated Dartmouth College in 2004, and earned my PhD in Electrical Engineering and Computer Science at MIT in 2009. After a two-year postdoc, also at MIT.', image: 'images/calnewport1.jpg',
  },
  {
    name: 'Atul Gawande', subName: 'Writer, Public health researcher', biographie: "Gawande later became a senior advisor in the Department of Health and Human Services after Clinton's first inauguration. He directed one of the three committees of the Clinton administration's Task Force on National Health Care Reform", image: 'images/Atul Gawande2.jpg',
  },
  {
    name: 'Brian Tracy', subName: 'Tracy is the chairman and chief executive officer (CEO)', biographie: "He is the author of over eighty books that have been translated into dozens of languages.[4] His popular books are Earn What You're Really Worth,[5] Eat That Frog!, No Excuses! The Power of Self-Discipline and The Psychology of Achievement.", image: 'images/background.jpg',
  },
  {
    name: 'Gary W. Keller', subName: 'Authors of best-sellers', biographie: 'An American entrepreneur and best-selling author. He is the founder of Keller Williams, which is the largest real estate company in the world by agent count and second in closed sales volume, and units sold.', image: 'images/Gary W. Keller3.jpg',
  },
  {
    name: 'Stephen Covey', subName: 'Authors of best-sellers', biographie: "Stephen Covey a obtenu une licence en administration des affaires à l'université de l'Utah, un MBA de l'université Harvard et un doctorat en éducation religieuse de l'université Brigham Young de Laval.", image: 'images/Stephen_Covey5.jpg',
  },
  {
    name: 'James Clear', subName: 'Author of best sellers, Speaker, Weightlifter.', biographie: 'The author of the #1 New York Times bestseller, Atomic Habits, which has sold more than 9 million copies worldwide and has been translated into more than 50 languages.', image: 'images/James Clear.jpg',
  },
];
loadSpeakers(listSpeakers);

/* ONLY for mobile version: Btn to display more speacker (2 displayed by default) */
btnShowMore.addEventListener('click', () => {
  const isShown = (btnShowMore.innerHTML === 'Show More');

  document.querySelectorAll('.speaker').forEach((liSpeaker, index) => {
    if (index > 1 && !isShown) {
      liSpeaker.classList.add('hidden');
    } else {
      liSpeaker.classList.remove('hidden');
    }
  });

  if (isShown) {
    btnShowMore.innerHTML = 'Show Less';
  } else {
    btnShowMore.innerHTML = 'Show More';
  }
});