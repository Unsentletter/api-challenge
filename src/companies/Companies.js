import React, { Component } from 'react';
import axios from 'axios';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
  }

  componentDidMount() {
    var header = {
      headers: {'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NGQxOTY4MGI1MWMxNTI2MGI5NDRmZDUiLCJpc3N1ZV9kYXRlIjoiMjAxNS0wOS0wOVQwNToxMzo1My40NThaIn0.Hk2XypA_KMUnIKdSVYnwq3Rn3QyMNSQ-e80-sZsA9bY'}
    };
    axios.get(`https://api.demo.muulla.com/cms/merchant/all/active/10/1`, header)
    .then((response) => {
      const companies = response.data.data;
      this.setState({companies});
      console.log("1 ", this.state.companies);
      console.log("2 ", this.state.companies[0].email);
      console.log(companies);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {

    return (
      <div className="App">
        <header>API Call</header>

      <ul>
        {this.state.companies.map(post => <li key={post._id}>{post.email}</li>)}

      </ul>


        <ul className="table">
          <li className="data-field"></li>
          <li className="data-field"><a href="#">display_name</a></li>
          <li className="data-field">email</li>
          <li className="data-field">phone</li>
          <li className="data-field">status</li>
          <li className="data-field">address</li>
        </ul>
      </div>
    );
  }
}

export default Companies;
