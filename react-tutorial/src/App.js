import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
 
    render(){
        
        var userName = "Bob";

        const characters = [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name:'Dee',
                job: 'Aspring actress',
            },
            {
                name:'Dennis',
                job:'Bartender',
            }
        ];

        return (
            <div>
            <div className="App">
                <h1>Hello, React! By {userName}</h1>
            </div>

            <div className="container">
                <Table characterData={characters} />
            </div>
            </div>
        )
    }
}

export default App
