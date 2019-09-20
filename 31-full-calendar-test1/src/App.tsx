import React from 'react';
import FullCalendar from '@fullcalendar/react';
// import interaction from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import momentPlugin from '@fullcalendar/moment';
import bootstrapPlugin from '@fullcalendar/bootstrap';

// import './main.scss'; // webpack must be configured to do this
// import '@fullcalendar/core/main.css';
// import '@fullcalendar/daygrid/main.css';
// import '@fullcalendar/timegrid/main.css';
// import '@fullcalendar/list/main.css';
import './calendar.css';
import './dayGrid.css';
import './timeGrid.css';
import './list.css';
import { EventApi, View } from '@fullcalendar/core';
import Tooltip from 'tooltip.js';

const dummy_events = [
  {
    title: 'event 1',
    date: '2019-09-17 10:15',
    backgroundColor: 'rgba(129, 199, 132, 0.8)',
    borderColor: 'red'
  },
  {
    title: 'event 2',
    date: '2019-09-31',
    allDay: true
  },
  {
    title: 'event 3',
    date: '2019-09-17 17:05',
    extendedProps: {
      status: 'LEAD'
    }
  },
  {
    title: 'event 4',
    start: '2019-09-17 14:30',
    end: '2019-09-17 19:30',
    extendedProps: {
      status: 'BOOKED'
    }
  },
  {
    title: 'event 5',
    start: '2019-09-17 13:15',
    allDay: true,
  },
  {
    title: 'event 6',
    start: '2019-09-19 15:45',
    end: '2019-09-19 18:30',
    backgroundColor: 'rgba(229, 115, 115, 0.8)',
    textColor: 'gold'
  },
  {
    title: 'event 7',
    start: '2019-09-19T15:30:00Z',
  },
  {
    title: 'event 8',
    start: '2019-09-19T15:30:00',
  },
  {
    title: 'event 9',
    start: '2019-09-20T17:30:00Z',
  },
  {
    title: 'event 10',
    start: '2019-09-20T17:30:00',
  },
  {
    title: 'event 11',
    start: '2019-09-17T17:30:00',
  },
  {
    title: 'event 12',
    start: '2019-09-17T18:00:00',
  },
  {
    title: 'event 13',
    start: '2019-09-17T19:00:00',
  }
];

const handleClickOnDate = (arg: any) => {
  alert(arg.dateStr);
}

const handleClickOnEvent = (arg: any) => {
  alert('clicked event is: \n' + arg.event._def.title);
}

const timeZoneString = 'local';
const timeFormatString = 'MMMM DD YYYY';

const headers = {
  left: 'dayGridMonth,timeGridWeek,timeGridDay, listWeek,listMonth, custom1',
  center: 'title',
  right: 'custom2, prevYear,prev,today,next,nextYear'
};

const footers = {
  left: 'custom2,custom1',
  center: '',
  right: 'prev,next',
}

const customButtons = {
  custom1: {
    text: 'custom 1',
    click: () => { alert('custom 1 is clicked!'); }
  },
  custom2: {
    text: 'custom 2',
    click: () => { alert('custom 2 is clicked!'); }
  }
};

const eventTimeFormat = {
  hour: 'numeric',
  minute: '2-digit',
  meridiem: 'short'
};

const eventRender = (info: {
  isMirror: boolean;
  isStart: boolean;
  isEnd: boolean;
  event: EventApi;
  el: HTMLElement;
  view: View;
}) => {
  if (info.event.extendedProps.status === "LEAD") {
    info.el.style.backgroundColor = 'rgba(229, 115, 115, 0.8)';
    info.el.style.color = 'gold';
    var dotEl: any = info.el.getElementsByClassName('fc-event-dot')[0];
    if (dotEl) {
      dotEl.style.backgroundColor = 'white';
    }
  } else if ((info.event.extendedProps.status === "BOOKED")) {
    info.el.style.backgroundColor = 'rgba(129, 199, 132, 0.8)';
  }
  let description = "Event Title: " + info.event.title + "\nStart Time is:" + info.event.start;
  var tooltip = new Tooltip(info.el, {
    title: description,
    placement: "top",
    trigger: "hover",
    container: "body"
  })
};

const clickOnEvent = (info:{
  el: HTMLElement;
  event: EventApi;
  jsEvent: MouseEvent;
  view: View;
}) => {
  var eventObj = info.event;

  if (eventObj.url) {
    alert(
      'Clicked ' + eventObj.title + '.\n' +
      'Will open ' + eventObj.url + ' in a new tab'
    );

    window.open(eventObj.url);

    info.jsEvent.preventDefault(); // prevents browser from following link in current tab.
  } else {
    alert('Event: \n' + eventObj.title + "\n\nStart: \n" + eventObj.start);
  }
};

function App() {
  return (
    <div className="App">
      <FullCalendar
        aspectRatio={1.5}
        fixedWeekCount={false}
        allDayText="All Day Event"
        slotDuration='00:30:00'
        nowIndicator={true}
        header={headers}
        footer={footers}
        customButtons={customButtons}
        dateClick={handleClickOnDate}
        eventClick={clickOnEvent}
        defaultView="dayGridMonth"
        plugins={
          [dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            momentPlugin,
            bootstrapPlugin
          ]}
        events={dummy_events}
        eventRender={eventRender}
        titleFormat={timeFormatString}
        eventTimeFormat={eventTimeFormat}
        eventLimit={true}
        eventLimitClick="popover"
        eventLimitText="more events"
        dayPopoverFormat={ {weekday: 'long', month: 'long', day: 'numeric'}}
        timeZone={timeZoneString}
        views={{
          listWeek: { buttonText: 'Week list' },
          listMonth: { buttonText: 'Month list' }
        }}
        columnHeaderFormat={{
          weekday: 'long',
        }}
      //themeSystem="bootstrap"
      />
    </div>
  );
}

export default App;
