import React, {Component} from "react";

export default class Test extends Component{
    state = {
        name: '',
    }
   componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevState.name !== this.state.name){
        this.setState({name: "USA"});
    }
   }

    componentDidMount() {
        this.setState({name: 'Sri Lanka'});
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.name}</h1>
            </div>
        );
    }
}