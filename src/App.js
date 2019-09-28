import React, { Component } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import RepoList from './components/RepoList'

export default class App extends Component
{
  render()
  {
    return (
      <React.Fragment>
        <Header />
        <RepoList />
        <Footer />
      </React.Fragment>
    )
  }
}

