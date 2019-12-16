import React from 'react';
import Calendar from 'calendar-teambt';

interface Event {
  balance: number;
  budget: number;
  client: string;
  date: Date;
  id: string;
  lastModifiedDate: Date;
  name: string;
  planner: string;
  progress: string;
  total: number;
  type: string;
  status: 'LEAD' | 'BOOKED'
}

const App: React.FC = () => {

  const events1 = [] as Event[];

  const events2: Event[] = [
    {
      balance: 0,
      budget: 0,
      client: "client 1",
      date: new Date(),
      id: "123456",
      lastModifiedDate: new Date(),
      name: "Event 1",
      planner: "Planner 1",
      progress: "INQUIRY",
      total: 1000,
      type: "WEDDING",
      status: 'LEAD',
    },
  ];

  const events3: Event[] = [
    {
      balance: 0,
      budget: 0,
      client: "client 1",
      date: new Date(),
      id: "123456",
      lastModifiedDate: new Date(),
      name: "Event 1",
      planner: "Planner 1",
      progress: "INQUIRY",
      total: 1000,
      type: "WEDDING",
      status: 'LEAD',
    },
    {
      balance: 1000,
      budget: 2000,
      client: "client 2",
      date: new Date("2019-12-25"),
      id: "abcdefg",
      lastModifiedDate: new Date("2019-12-01"),
      name: "Event 2",
      planner: "Planner 1",
      progress: "INQUIRY",
      total: 0,
      type: "WEDDING",
      status: 'LEAD',
    }
  ]


  return (
    <React.Fragment>
      <Calendar events={events1} />
      <Calendar events={events2} />
      <Calendar events={events3} />
    </React.Fragment>
  );
}

export default App;
