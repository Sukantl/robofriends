// import React from 'react';
import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
// import { robots } from './robots';
import './App.css';


// const state = {
//     robots: robots,
//     searchfield: ''
// }


// const App=() => {
//     return (
//         <div className='tc'>
//             <h1>RoboFriends</h1>
//             <SearchBox/>
//             <CardList robots={robots}/>
//         </div>
//     );
// }

//convert into class
class App extends Component {
    //how to add this into const state makee constr..
    constructor() {
        super()
        // after use this. make a super()
        this.state = {
            // robots: robots,
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(Response => {
            return Response.json();
        })
            .then(users => {
                // this.setState({robots:robots})
                this.setState({ robots: users })
            })
    }
    //second robots are 
    //     this.setState({robots:robots})
    // }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        // console.log(filteredRobots); //trget.value give us the value of the search term

    }


    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                {/* pass the onsearch change */}
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
}
export default App;