import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {

    state = {
        characters: [
        ]
    }

    removeCharacter = index =>{
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })


    }

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character]})
    }
 
    render(){
        
        var userName = "Bob";
        const { characters } = this.state;

        return (
            <div>
                <div className="App">
                    <h1>Hello, React! By {userName}</h1>
                </div>

                <div className="container">
                    <Table characterData={characters} removeCharacter={this.removeCharacter} />
                    <Form handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

export default App
