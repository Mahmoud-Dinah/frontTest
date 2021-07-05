import React, { Component } from "react";
import axios from "axios";
import ApiData from "./ApiData";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: process.env.REACT_APP_SERVER_URL,
      apiData: [],
      showApiDataComponent: false,
      message: '',
      showApiMessage: false
    };
  }

  componentDidMount = async () => {
    const request = await axios.get(`${this.state.url}/art`);
    this.setState({
      apiData: request.data,
      showApiDataComponent: true,
    });
    console.log(this.state.url);
  };

  favoriteItem = async (dataObj) => {
console.log(dataObj);
const postRequest = await axios.post(`${process.env.REACT_APP_SERVER_URL}/art/fav`, dataObj);
this.setState({
    message: postRequest.data,
    showApiMessage:true
})
  }

  render() {

    return <>
    {this.state.showApiMessage &&

    <h3>
        {this.state.message}
    </h3>

    }
    
    {this.state.showApiDataComponent &&
        
        <ApiData 
        
        apiData={this.state.apiData}
        favoriteItem= {this.favoriteItem}

     />}
    </>;
  }
}

export default Main;
