import { Component } from 'react';

export default class LikeDislike extends Component {
    
    constructor(props){
        super(props);
        this.state={
            liked: false,
            disliked: false,
            like:100,
            dislike:25,
        };
        
        this.onLikeClick = this.onLikeClick.bind(this);
        this.onDisLikeClick = this.onDisLikeClick.bind(this);
    };
    
    onLikeClick(){
        if(!this.state.liked){
            this.setState({like: this.state.like+1, liked: true});
            if(this.state.disliked){
                this.setState({dislike: this.state.dislike-1, disliked: false});
            }
        }else{
            this.setState({like: this.state.like-1, liked: false});
        }
    }

    onDisLikeClick(){
        if(!this.state.disliked){
            this.setState({dislike: this.state.dislike+1, disliked: true});
            if(this.state.liked){
                this.setState({like: this.state.like-1, liked: false});
            }
        }else{
            this.setState({dislike: this.state.dislike-1, disliked: false});
        }
    }
    
    render() {
        return (
            <>
                <div>
                    <h2>Like/Dislike</h2>
                </div>
                <button onClick={this.onLikeClick} className={`like-button${this.state.liked?' liked':''}`} >Like | <span className='likes-counter'>{this.state.like}</span></button>
                <button onClick={this.onDisLikeClick} className={`dislike-button${this.state.disliked?' disliked':''}`} >Dislike | <span className='dislikes-counter'>{this.state.dislike}</span></button>
                <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
            </>
        );
    }
}
