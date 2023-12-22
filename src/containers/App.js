import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import { robots } from '../robots';
import SearchBox1 from '../components/SearchBox1';
import Scroll1 from '../components/Scroll1';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: "",
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
           .then(response=> response.json())
        .then(users  => this.setState({ robots: robots }));
}

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render() {
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!robots.length) {
            return <h1>Loading</h1>
        } else {
        return(
            <div className='tc'>
             <h1 className='f1'>Robofriends</h1>
             <SearchBox1 SearchChange={this.onSearchChange}/>
             <Scroll1>
            
             <Cardlist robots={filteredRobots}/>
            
             </Scroll1>
            </div>
            );   
         }
        }
}

export default App;