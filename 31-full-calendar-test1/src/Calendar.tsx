import * as React from 'react';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventApi, View } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import momentPlugin from '@fullcalendar/moment';
import timeGridPlugin from '@fullcalendar/timegrid';

import './calendar.css';
import './dayGrid.css';
import './list.css';
import './timeGrid.css';

const timeZoneString = 'America/Los_Angeles';
const timeFormatString = 'MMMM DD YYYY';

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

const headers = {
  left: 'dayGridMonth,timeGridWeek,timeGridDay, listWeek,listMonth',
  center: 'title',
  right: 'prevYear,prev,today,next,nextYear'
};

const plugins = [dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  momentPlugin,
  bootstrapPlugin
];

const views = {
  listWeek: { buttonText: 'Week list' },
  listMonth: { buttonText: 'Month list' }
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
    var dotEl: any = info.el.getElementsByClassName('fc-event-dot')[0];
    if (dotEl) {
      dotEl.style.backgroundColor = 'red';
    }
  } else if ((info.event.extendedProps.status === "BOOKED")) {
    info.el.style.backgroundColor = 'rgba(129, 199, 132, 0.8)';
    var dotEl: any = info.el.getElementsByClassName('fc-event-dot')[0];
    if (dotEl) {
      dotEl.style.backgroundColor = 'green';
    }
  }
};

const handleClickOnDate = (arg: any) => {
  alert(arg.dateStr);
}

interface ICalendar {
  events: object[],
  onEventClick: (arg: {
    el: HTMLElement;
    event: EventApi;
    jsEvent: MouseEvent;
    view: View
  }) => boolean | void;
}

const Calendar: React.SFC<ICalendar> = ({
  events,
  onEventClick
}) => {

  return (<div>
    <FullCalendar
      aspectRatio={1.5}
      allDayText="Whole Day"
      customButtons={customButtons}
      dateClick={handleClickOnDate}
      defaultView="dayGridMonth"
      eventClick={onEventClick}
      events={events}
      eventRender={eventRender}
      fixedWeekCount={false}
      header={headers}
      plugins={plugins}
      timeZone={timeZoneString}
      titleFormat={timeFormatString}
      views={views}
    />
  </div>);
}

export default Calendar;