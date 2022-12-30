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
        description.style.alignItems = "center"
        liEvent.style.flexWrap = "nowrap"
      }
      else {
        title.style.marginBottom = "10px"
        description.style.height = "150px"
        subDetail.style.width = "100%"
      }


      liEvent.style.backgroundColor = "#DECDFF"
      icons.style.backgroundColor = "#7955BE"

      switch(event.type){
        case "lecture": {
          icons.classList.add('fa-sharp', 'fa-solid' ,'fa-book')
          break
        }
        case "practice": {
          liEvent.style.backgroundColor = "#CED3FF"
          icons.style.backgroundColor = "#5268D9"
          icons.classList.add('fa-solid' ,'fa-briefcase')
          break
        }
        case "discussion": {
          liEvent.style.backgroundColor = "#FFC9C9"
          icons.style.backgroundColor = "#DB5858"
          icons.classList.add('fa-solid' ,'fa-comments')
          break
        }
        case "open-access": {
          liEvent.style.backgroundColor = "#D2E3FF"
          icons.style.backgroundColor = "#6386C0"
          icons.classList.add('fa-solid' ,'fa-mug-hot')
          break
        }
        case "gift": {
          liEvent.style.backgroundColor = "#D2E3FF"
          icons.style.backgroundColor = "#6386C0"
          icons.classList.add('fa-solid' ,'fa-gift')
          break
        }
        case "event": {
          liEvent.style.backgroundColor = "#ffcff7"
          icons.style.backgroundColor = "#C655B3"

          liEvent.style.paddingTop = "32px"
          liEvent.style.paddingBottom = "32px"
          icons.classList.add('fa-solid', 'fa-champagne-glasses')
          break
        }
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
      {title: "Presentation"}
    ]
  },
  {time: "10:00 - 10:40('30')", 
    events: [
     {title: "Meeting Peers", type: "open-access", description:"Meet partner with which you will practice exercice", location: "Meeting room (Ticket's number)"}
    ]
  },
  {time: "10:40 - 11:00", events: [{title: "Break and Exploration"}]},
  {time: "11:00 - 13:00", 
    events: [
      {title: "Deep Work", type: "lecture", description:"Rules for Focused Success in a Distracted World ? How to do more in less time. <br><br> Cal Newport", location: "Main Auditoruim", moreInfo: "What's Open Business"},
      {title: "Try YOUR Deep Work's method", type: "practice", description:"What's work for you ? And how to implemente it to your life ? <br><br> Practice with partners", location: "location", moreInfo: "What's a sharing city"},
      {title: "Atomic Habits", type: "lecture", description:"How to use Micro habits to change your life in a long run ?", location: "Practice Room (Ticket's number)", moreInfo: "What's a sharing city"}
    ]
  },
  {time: "13:00 - 14:00", events: [{title: "Lunch Break"}]},

  {time: "10:00 - 10:10", 
    events: [
      {title: "Open Business", type: "lecture", description:"What point should be ensured in order to success in open business ?", location: "Main Auditoruim", moreInfo: "What's Open Business"},
      {title: "Sharing City", type: "discussion", description:"What's point should be ensured in order to success in sharing city ?", location: "location", moreInfo: "What's a sharing city"},
    ]
  },
  {time: "09:30 - 10:00", events: [{title: "Break"}]},
  {time: "10:00 - 10:40('30')", 
    events: [
      {title: "[Keynote] Humanology", type: "gift", description:"Prof. Kinam Cheon", location: "Main Auditoruim"}
    ]
  },
  {time: "10:00 - 10:40('30')", 
    events: [
      {title: "[Keynote] Humanology", type: "event", description:"Prof. Kinam Cheon", location: "Main Auditoruim"}
    ]
  }
]

loadEvents(listEvents)