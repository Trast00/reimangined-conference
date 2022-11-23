/* Mobile Menu Interaction */
const btnOpenMenu = document.getElementById("open-menu")
const btnCloseMenu = document.getElementById("close-menu")
const menu = document.getElementById("mobile-nav")
btnOpenMenu.addEventListener('click', () => {
  menu.style.left = "0"
})
btnCloseMenu.addEventListener('click', () => {
  menu.style.left = "-100vw"
})

/* Load Speaker */

function loadSpeakers(listSpeaker) {
  const ulListSpeaker = document.getElementById('list-speakers')
  ulListSpeaker.innerHTML = ''
  listSpeaker.forEach((speaker) => {
    const liSpeaker = document.createElement('li')
    liSpeaker.classList.add('speaker')
  
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('speaker-img-container')
    const img = document.createElement('img')
    img.src = speaker.image
    img.alt = "Speaker Profile Image"
    imgContainer.append(img)
  
    const descriptionContainer = document.createElement('div')
    descriptionContainer.classList.add('descriptions-container')
    const title = document.createElement('h3')
    title.classList.add('speaker-title')
    title.textContent = speaker.name
    const subtitle = document.createElement('p')
    subtitle.classList.add('speaker-subtitle')
    subtitle.textContent = speaker.subName
    const line = document.createElement("hr")
    const description = document.createElement('p')
    description.classList.add('speaker-description')
    description.textContent = speaker.biographie
  
    descriptionContainer.append(title)
    descriptionContainer.append(subtitle)
    descriptionContainer.append(line)
    descriptionContainer.append(description)
  
    liSpeaker.append(imgContainer)
    liSpeaker.append(descriptionContainer)
  
    ulListSpeaker.append(liSpeaker)

  })
}

const listSpeakers = [
  {name:"Yochai Benkler 1", subName:"Berkman 1 Professor of Entrepreneurial Legal Studies at Harvard law School",  biographie:"Benkle stuies commons-based peer production, and published his seminal book The Weath of Networks in 2006", image:"images/background.jpg"},
  {name:"Yochai Benkler 2", subName:"Berkman 2 Professor of Entrepreneurial Legal Studies at Harvard law School",  biographie:"Benkle stuies commons-based peer production, and published his seminal book The Weath of Networks in 2006", image:"images/background.jpg"},
  {name:"Yochai Benkler 3", subName:"Berkman Professor of Entrepreneurial Legal Studies at Harvard law School",  biographie:"Benkle stuies commons-based peer production, and published his seminal book The Weath of Networks in 2006", image:"images/background.jpg"},
  {name:"Yochai Benkler 4", subName:"Berkman Professor of Entrepreneurial Legal Studies at Harvard law School",  biographie:"Benkle stuies commons-based peer production, and published his seminal book The Weath of Networks in 2006", image:"images/background.jpg"}
]
loadSpeakers(listSpeakers)