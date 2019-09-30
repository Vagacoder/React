import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import MaterialTable, { MTableActions, MTableAction } from 'material-table';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
function App() {

  const columns = [
    { title: 'First Name', field: 'name' },
    { title: 'Family Name', field: 'surname' },
    { title: 'Date of Birth', field: 'birthYear', type: 'numeric' },
    {
      title: 'Birth City', field: 'birthCity',
      lookup: {
        1: 'Washington',
        2: 'Los Angeles',
        3: 'Tokoyo',
        4: 'Moscow',
        5: 'Miami',
        6: 'Beijing',
        7: 'New Deli',
        8: 'Paris',
        9: 'London',
        10: 'Oakland'
      }
    }
  ];

  const [data, setData ] = useState([
    {
      name: 'Alex',
      surname: 'Smith', birthYear: 1987,
      birthCity: 3
    },
    {
      name: 'Bob',
      surname: 'Johnson', birthYear: 1972,
      birthCity: 1
    },
    {
      name: 'Charlie',
      surname: 'Woods', birthYear: 1990,
      birthCity: 8
    }
  ]);

  return (
    <div style={{ maxWidt: '100%' }} className="App">
      <div><a href="https://material-table.com/#/">Maerial-Table</a></div>
      <br />
      <MaterialTable
        columns={columns}
        data={data}
        title="Demo for Material Table"
        actions={
          [
            {
              icon: 'save',
              tooltip: 'Save User',
              onClick: (event, rowData) => {
                alert(rowData);
              }
            }
          ]
        }
        components={
          {
            Toolbar: props => (
              <div>
                <Button>Click it</Button>
              </div>
            ),
            Action: props => (
              <div>
                <Switch props={{...props}}
                  checked={false}
                />
                <span> Book </span>
              </div>
            )
          }
        }
        editable={{
          onRowUpdate: (newData, oldData) => {
              const tempData = {...data};
              const index = data.indexOf(oldData);
              tempData[index] = newData;
              setData(tempData);
          }
        }}
      >
      </MaterialTable>
    </div>
  );
}

export default App;
