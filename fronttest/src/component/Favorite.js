import React, { Component } from 'react'
import axios from 'axios';
import ApiCrudData from '../component/ApiCrudData';
import CrudUpdateForm from './CrudUpdateForm';

export class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
          url: process.env.REACT_APP_SERVER_URL,
          apiCrudData: [],
          showApiCrudDataComponent: false,
          message: '',
          showApiMessage: false,
          description: '',
          slugName: '',
          showUpdateForm: false
        };
      }

      componentDidMount = async () => {
      const request =  await axios.get(`${this.state.url}/art/fav`);
      this.setState({
          apiCrudData: request.data,
          showApiCrudDataComponent: true
      })
      } 

      deleteItem = async (slug) => {
        
      const request = await axios.delete(`${this.state.url}/art/fav/${slug}`);
      this.setState({
        apiCrudData:request.data
      })
      }

      showUpdateForm = (desc, slug) =>{
        this.setState({
          description: desc,
          slugName:slug,
          showUpdateForm: true
        })

      }

      updateDescState = (e) => this.setState({description: e.target.value})

      updateItem = async (e) =>{
        e.preventDefault();
        const request = await axios.put(`${this.state.url}/art/fav/${this.state.slugName}`, {description:this.state.description});

        this.setState({
          apiCrudData: request.data
        })
      }

    render() {

        return <>

{this.state.showApiCrudDataComponent &&
            
            <ApiCrudData 
            
            apiCrudData={this.state.apiCrudData}
            deleteItem= {this.deleteItem}
            showUpdateForm={this.showUpdateForm}
    
         />}

        {this.state.showApiMessage &&
    
        <h3>
            {this.state.message}
        </h3>
    
        }
        

         {this.state.showUpdateForm &&
            <CrudUpdateForm
            updateItem={this.updateItem}
            updateDescState={this.updateDescState}
            description={this.state.description}
            />
           
         }
        </>;
      }
}

export default Favorite
