import React, { useState } from 'react';
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
    priceClient: 1000
  }, {
    arrangementId: 'lAd5dQTsqdwrGb7v3Dqh',
    name: 'Cocktail Table',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/bloomtrac.appspot.com/o/ArrangementPics%2Farr2.jpg?alt=media&token=3f635d35-d4d3-41f1-9afc-4760280c9a2e',
    description: 'Flowers for Cocktails table...',
    eventId: "tW5jFC68DT8SUcJ8uEmM",
    note: 'this is a table for cocktails',
    qty: 3,
    priceClient: 500
  }, {
    arrangementId: 'jPeM4rbp2Kq3pI6EQuwE',
    name: 'Guest Table Style',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/bloomtrac.appspot.com/o/ArrangementPics%2Farr3.jpeg?alt=media&token=3f6677a8-2e2f-47af-818e-1cf3633c023f',
    description: 'Flower for guest table',
    eventId: "tW5jFC68DT8SUcJ8uEmM",
    note: 'special guest table',
    qty: 5,
    priceClient: 750
  }
  ]

  const [arrangementDataList, setArrangementDataList] = useState(dummy_arrangement_data_list);

  const updateArrangmentList = (index, newArrangementData) => {
    let tempArrangementDataList = arrangementDataList.slice(0);
    tempArrangementDataList[index]= newArrangementData;
    setArrangementDataList(tempArrangementDataList);
  }

  const onArrangementCardDrop = (dropResult) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      let newArrangementDataList = applyDrag(arrangementDataList, dropResult);
      setArrangementDataList(newArrangementDataList);
    }
  };

  const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;
    const result = arr.slice(0);
    let itemToAdd = payload;
  
    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0];
    }
    if (addedIndex !== null) {
      result.splice(addedIndex, 0, itemToAdd);
    }
    return result;
  };

  const getArrangementCardPayload = (index) => {
    return arrangementDataList[index];
  };

  const nonDraggableArea = ".arrangement-name, .description, .note, .qty, .each-price-client, .extend-price-client, .options";

  return (
    <div className="App">
      <Container 
      nonDragAreaSelector={nonDraggableArea}
      onDrop={onArrangementCardDrop}
      getChildPayload={index =>getArrangementCardPayload(index)}
      >
        {arrangementDataList.map((arrangementData, index) => {
          return (
          <Draggable 
          key={arrangementData.arrangementId}>
            <ClientViewArrangementCard
              arrangementData={arrangementData}
              arrangementIndex={index}
              updateArrangmentList={updateArrangmentList}
              removeThisArrangement={() => { alert('removed.') }}
              addNewArrangement={() => { alert('added.') }}
            />
          </Draggable>)
        })}
      </Container>

    </div>
  );
}

export default App;
