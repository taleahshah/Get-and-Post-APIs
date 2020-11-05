import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
          error: null,
          isLoaded: false,
          items: [],
          flag:0
        };
  }

MyGETAPI=()=>{
    axios.post('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response)
      this.setState({isLoaded:true,
                      flag:1
                    })
    })
    .catch(error => {
      alert(error);
      console.log(error);
    })

  }

MyPOSTAPI=()=>{

  // var registerDict = {name:'Taleah',email:'taleahshah.08@gmail.column',pass:'123456'};

  var dict = { title: 'foo', body: 'bar', userId: 1 };

  axios.post('https://jsonplaceholder.typicode.com/posts',dict)
  .then(response => {
    console.log(response)
    this.setState({isLoaded:true,
                    flag:2
                  })
  })
  .catch(error => {
    alert(error);
    console.log(error);
  })

}

  render() {

    const { error, isLoaded, items } = this.state;

    if (this.state.flag == 1){

      return(
      <div>

      <button onClick={this.MyGETAPI}>
      My Get API
      </button>

      <h1> Taleah's Get API results are here ....</h1>

      </div>

      );

    }else if (this.state.flag == 2) {

      return(

      <div>
      <button onClick={this.MyPOSTAPI}>
      My Post API
      </button>

      <h1> Taleah Post Request Submitted Successfully</h1>

      </div>

      );
    }
    else{
      return(
        <div>
        <button onClick={this.MyPOSTAPI}>
        My Post API
        </button>

        <button onClick={this.MyGETAPI}>
        My Get API
        </button>


        </div>
      )
    }
  }

  componentDidMount() {

    }
}

export default App;
