import React from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import ClientViewArrangementCard from './ClientViewArrangementCard';

function App() {

  const dummy_arrangement_data_list = [{
    arrangementId: 'g47rHagGGcYzxKMEsPSw',
    name: 'Welcome Table',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/bloomtrac.appspot.com/o/ArrangementPics%2Farr1.jpg?alt=media&token=5cdc60c6-1047-4044-9def-dfbc4aff925f',
    description: 'Hand gathered collection of seasonal ...',
    eventId: "tW5jFC68DT8SUcJ8uEmM",
    note: 'this is a table for reception',
    qty: 2,
    price: 1000
  }, {
    arrangementId: 'lAd5dQTsqdwrGb7v3Dqh',
    name: 'Cocktail Table',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/bloomtrac.appspot.com/o/ArrangementPics%2Farr2.jpg?alt=media&token=3f635d35-d4d3-41f1-9afc-4760280c9a2e',
    description: 'Flowers for Cocktails table...',
    eventId: "tW5jFC68DT8SUcJ8uEmM",
    note: 'this is a table for cocktails',
    qty: 3,
    price: 500
  }, {
    arangementId: 'jPeM4rbp2Kq3pI6EQuwE',
    name: 'Guest Table Style',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/bloomtrac.appspot.com/o/ArrangementPics%2Farr3.jpeg?alt=media&token=3f6677a8-2e2f-47af-818e-1cf3633c023f',
    description: 'Flower for guest table',
    eventId: "tW5jFC68DT8SUcJ8uEmM",
    note: 'special guest table',
    qty: 5,
    price: 750
  }
  ]


  return (
    <div className="App">
      <Container onDrop={() => { alert('Dropped.') }}>
        <Draggable key="1">
          <ClientViewArrangementCard
            arrangementData={dummy_arrangement_data_list[0]}
            removeThisArrangement={() => { alert('removed.') }}
            addNewArrangement={() => { alert('added.') }}
          >
          </ClientViewArrangementCard>
        </Draggable>
        <Draggable key="2">
          <ClientViewArrangementCard
            arrangementData={dummy_arrangement_data_list[1]}
            removeThisArrangement={() => { alert('removed.') }}
            addNewArrangement={() => { alert('added.') }}
          >
          </ClientViewArrangementCard>
        </Draggable>
        <Draggable key="3">
          <ClientViewArrangementCard
            arrangementData={dummy_arrangement_data_list[2]}
            removeThisArrangement={() => { alert('removed.') }}
            addNewArrangement={() => { alert('added.') }}
          >
          </ClientViewArrangementCard>
        </Draggable>
      </Container>

    </div>
  );
}

export default App;
