class App extends React.Component {
    render() {
      return (
        <div className="loading-bar">
          <BackgroundRect />
          <ForegroundRect />
        </div>
      );
    }
  }
  
  class BackgroundRect extends React.Component {
    render() {
      return(
        <div className="background-rect"></div>
      );
    }
  }
  
  
  class ForegroundRect extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        myStyle: {
          width: '0px'
        }
      };
      
      let intId = setInterval(() => {
        let newWidth = parseInt(this.state.myStyle.width) + 10;
        if (newWidth >= 400) {
          clearInterval(intId);
        }
        this.setState({
          myStyle: {
            width: `${newWidth}px`
          }
        });
      }, 1000);
    }
    
    render() {
      return(
        <div className="foreground-rect" style={this.state.myStyle}></div>
      );
    }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  