import React, {Component} from 'react'
import Panel from './panel'

class Display extends Component {

    render(){
        var d1= new Date();
        return (
            <p>This is a panel for display. Day of today {d1.toString()} is {d1.getDate()}.</p>
        );
    }
}

export default Display