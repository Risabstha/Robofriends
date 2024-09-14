import React ,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import {robots} from './robots';
import Scroll from '../components/Scroll';
import "./App.css";

/* robots is props_name and {robots} is array from robots.js */

class App extends Component 
{ 
    constructor()
    {
        super()
        this.state={
            robots:[],
            Searchfield:''
        }
        
       
    }
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')     //fetching robots from given url (api)
       .then(response=> response.json())
       .then((okay) =>this.setState({robots:okay})) 
    }


    onsearchChange = (event)=>
    {
        this.setState({Searchfield: event.target.value})
    }
    render()
    {
        const {robots,Searchfield} = this.state;       // now this.state.robots or this.state.Searchfield can be written as robots or Searchfield
        const filterrobots = robots.filter( robot => 
            {return robot.name.toLowerCase().includes(Searchfield.toLowerCase())
            })
        
            //instead of if else we can use ternary operator
    if(robots.length===0)       //if(!robots.length)
    {
        return (<h1 className='tc'>Loading</h1>);
    }
    else{
        return(
            <div className='tc'>
                <h1 >ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onsearchChange}/>
                <Scroll>
                    <CardList robots = {filterrobots}/> 
                </Scroll>
            </div>
        );
    }
}
}
export default App;