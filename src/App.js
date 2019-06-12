import React,{ Component } from 'react';
import axios from "axios";
import logo from './logo/github-logo.jpg';
import './App.css';

import UserForm from "./components/UserForm";

class App extends Component{
  state={
    repos:null
  }



  getUser = (e) => {
    e.preventDefault();//e depicts even handler
    const user = e.target.elements.username.value;//props

    if (user) {
      axios.get(`https://api.github.com/users/${user}`).then((res)=>{
      
      const repos=res.data.public_repos;
      this.setState({repos: repos});

    })
    } else return;
    
  }
  render(){
    return(
      <div>
         <img src={logo} className="App-logo" alt="Logo" />
         <header className="App-header">
            <h1 className="App-title">GitHub Repositary Counter</h1>
         </header>
         <UserForm getUser={this.getUser}/>
         {this.state.repos?<p className="App-para"> Number of Repositaries: {this.state.repos}</p>:
         <p className="App-para">Please type the username</p>}
      </div>
      );
  }
};
export default App;














