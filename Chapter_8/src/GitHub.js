import React, { Component } from 'react';
import axios from 'axios'; 
//import ReactLoading from 'react-loading';
//import { Media, Form, Button } from 'react-bootstrap';

class GitHub extends Component {
    getGitHubData(_searchTerm){                 
        axios.get("https://api.github.com/search/users?q="+_searchTerm) 
        .then(res => {                                 
        console.log(res.data.items);  
        });              
        } 
}
  
export default GitHub;