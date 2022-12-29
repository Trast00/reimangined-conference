/* Load List event dynamically */

const loadEvents = (listEvents) => {
  console.log('Event')
  const calendar = document.querySelector('.calendar')
  listEvents.forEach((row) => {
    const liRow = document.createElement('li')
    liRow.classList.add('row', 'border-bottom')
    
    const pTime = document.createElement('p')
    pTime.textContent = row.time
    pTime.classList.add('date')

    const ulListEvent = document.createElement('ul')
    ulListEvent.classList.add('list-event')
    
    row.events.forEach((event) => {
      const liEvent = document.createElement('li')
      if (event.description === undefined){
        liEvent.classList.add('event-simple')
        liEvent.textContent = event.title
        ulListEvent.append(liEvent)
        return
      }else {

      }
      liEvent.classList.add('event')

      const detail = document.createElement('div')
      detail.classList.add('event-detail')

      const title = document.createElement('div')
      title.classList.add('event-title', 'row')

      const icons = document.createElement('i')
      icons.classList.add('fa-solid', 'fa-mug-hot')
      
      const hTitle = document.createElement('h6')
      hTitle.classList.add('event-title')
      hTitle.textContent = event.title

      const description = document.createElement('p')
      description.classList.add('event-description')
      description.innerHTML = event.description
      

      const subDetail = document.createElement('div')
      subDetail.classList.add('event-subdetail')

      const localisation = document.createElement('p')
      localisation.classList.add('event-localisation')
      localisation.textContent = event.location
      const moreInfo = document.createElement('p')
      moreInfo.classList.add('event-question')
      moreInfo.textContent = event.moreInfo

      if (row.events.length === 1){
        moreInfo.style.display = "none"
      }
      else {
        title.style.marginBottom = "10px"
        description.style.height = "150px"
        subDetail.style.width = "100%"
      }

      /* Appends */
      title.append(icons, hTitle)
      detail.append(title, description)

      subDetail.append(localisation, moreInfo)

      liEvent.append(detail, subDetail)

      ulListEvent.append(liEvent)
    })

    /* Appends */
    liRow.append(pTime, ulListEvent)

    calendar.append(liRow)
  })
}

const listEvents = [
  {time: "09:30 - 10:00", events: [{title: "Registration"}]},
  {time: "10:00 - 10:10", 
    events: [
      {title: "Opening Remarks"},
      {title: "TBD"}
    ]
  },
  {time: "10:00 - 10:40('30')", 
    events: [
     {title: "[Keynote] Humanology", type: "lecture", description:"Prof. Kinam Cheon", location: "Main Auditoruim"}
    ]
  },
  {time: "10:00 - 10:10", 
    events: [
      {title: "Open Business", type: "lecture", description:"What point should be ensured in order to success in open business ?", location: "Main Auditoruim", moreInfo: "What's Open Business"},
      {title: "Sharing City", type: "lecture", description:"What's point should be ensured in order to success in sharing city ?", location: "location", moreInfo: "What's a sharing city"},
      {title: "Sharing City", type: "lecture", description:"What's point should be ensured in order to success in sharing city ?", location: "location", moreInfo: "What's a sharing city"}
    ]
  },
  {time: "10:00 - 10:40('30')", 
    events: [
      {title: "[Keynote] Humanology", type: "lecture", description:"Prof. Kinam Cheon", location: "Main Auditoruim"}
      ]
    },
  {time: "10:00 - 10:10", 
    events: [
      {title: "Open Business", type: "lecture", description:"What point should be ensured in order to success in open business ?", location: "Main Auditoruim", moreInfo: "What's Open Business"},
      {title: "Sharing City", type: "lecture", description:"What's point should be ensured in order to success in sharing city ?", location: "location", moreInfo: "What's a sharing city"},
    ]
  },
  {time: "10:00 - 10:40('30')", 
    events: [
      {title: "[Keynote] Humanology", type: "lecture", description:"Prof. Kinam Cheon", location: "Main Auditoruim"}
    ]
  }
]

loadEvents(listEvents)