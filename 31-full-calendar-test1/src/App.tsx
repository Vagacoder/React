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

const dummy_events = [
  {
    title: 'event 1',
    date: '2019-09-17 10:15'
  },
  {
    title: 'event 3',
    date: '2019-09-17 17:05'
  },
  {
    title: 'event 4',
    start: '2019-09-17 14:30',
    end: '2019-09-17 19:30'
  },
  {
    title: 'event 2',
    date: '2019-09-31',
    allDay: true
  },
  {
    title: 'event 5',
    start: '2019-09-17 13:15',
    allDay: true
  }
];

const handleClickOnDate = (arg: any) => {
  alert(arg.dateStr);
}

const handleClickOnEvent = (arg: any) => {
  alert('clicked event is: \n' + arg.event._def.title);
}

const timeZoneString = 'America/Los_Angeles';
const timeFormatString = 'MMMM DD YYYY';

const headers = {
  left: 'dayGridMonth,timeGridWeek,timeGridDay, custom1',
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
}

function App() {
  return (
    <div className="App">
      <FullCalendar
        aspectRatio={1.5}
        fixedWeekCount={false}
        allDayText="All Day"
        slotDuration='00:30:00'
        header={headers}
        footer={footers}
        customButtons={customButtons}
        dateClick={handleClickOnDate}
        eventClick={handleClickOnEvent}
        defaultView="dayGridMonth"
        plugins={
          [dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            momentPlugin,
            bootstrapPlugin
          ]}
        events={dummy_events}
        titleFormat={timeFormatString}
        timeZone={timeZoneString}
      //themeSystem="bootstrap"
      />
    </div>
  );
}

export default App;
