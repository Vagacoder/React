class App extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        style: {
          position: 'absolute',
          top: '50px',
          left: '50px'
        }
      }
    }
    
    handleMouseMove(e) {
      this.setState({
        style:{
          position: 'absolute',
          top: `${e.clientY}px`,
          left: `${e.clientX}px`
        }
      })
    }
    
    render (){ 
      return (
      <div className='box' style={this.state.style} onMouseMove={(e) => {this.handleMouseMove(e);}}></div>);
     }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  