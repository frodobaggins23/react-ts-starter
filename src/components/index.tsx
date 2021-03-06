import React from 'react'
import './app.scss'
import Header from 'components/header/'
import logo from '../assets/img/react.png'

const Home = () => {
  return (
    <div className="container">
        <div className="header">
            <Header/>
            <h4>What is included?</h4>
            <ul>
              <li>Typescript</li>
              <li>CSS modules</li>
              <li>Webpack dev server</li>
              <li>Eslint</li>
            </ul>
            <img src={logo}/>
        </div>
    </div>
  )
}

export default Home
