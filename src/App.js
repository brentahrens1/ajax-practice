import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login'
import NewsList from './News/News'
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      logged: false,
      username: '',
      news: [],
      loading: true
    }
  }

  componentDidMount () {

    this.getNews()
  }

  handleLogin = (username) => {
    console.log('working')
      
    this.setState ({
      username: username,
      logged: true
    })
  }

  getNews = async () => {
    try {

      const news = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=0b0c6cf65f214d1d92ea7da358032d66')

      if (!news.ok) {
        throw Error(news.statusText)
      }
      const crimesParsedJson = await news.json()

      this.setState ({
        news: crimesParsedJson.articles,
        loading: false
      })

    } catch (err) {
      console.log(err, 'error in catch block')
      return err
    }
  }

  render() {
    return (
      <div className="App">
      {this.state.logged ? <NewsList news={this.state.news}/> : <Login handleLogin={this.handleLogin}/> }
      </div>
    );
  }
}

export default App;
