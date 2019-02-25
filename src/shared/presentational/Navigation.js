import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class Navigation extends Component {
  constructor(props) {
      super(props);
  }
    render() {
        return (
          <div className="containerr">
          <nav className="navbar navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">
              <img src={`https://image.flaticon.com/icons/svg/21/21601.svg`} width="60" height="60" alt="" />
            </NavLink>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <NavLink className="nav-black-list nav-link disabled hover-main-links" to="/AbcNews">ABC News</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-black-list nav-link disabled hover-main-links" to="/BBC_News">BBC News</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-black-list nav-link disabled hover-main-links" to="/CBC_News">CBC News</NavLink>
              </li>
            </ul>
            </nav>
            <div>
              <ul className="nav justify-content-center bg-nav">
                  <NavLink className="nav-link disabled nav-white-list home-button" to="/">
                    <li className="nav-item">Home</li>
                  </NavLink>
                  <NavLink className="nav-link disabled nav-white-list" to="/Money_News">
                    <li className="nav-item">Money</li>
                  </NavLink>
                  <NavLink className="nav-link disabled nav-white-list" to="/Sport">
                    <li className="nav-item">Sport</li>
                  </NavLink>
                  <NavLink className="nav-link disabled nav-white-list" to="/NBC_News">
                    <li className="nav-item">NBC News</li>
                  </NavLink>
                  <NavLink className="nav-link disabled nav-white-list" to="/Neewsweek">
                    <li className="nav-item">Newsweek</li>
                  </NavLink>
                  <NavLink className="nav-link disabled nav-white-list" to="/Policy">
                    <li className="nav-item">Policy</li>
                  </NavLink>
                  <NavLink className="nav-link disabled nav-white-list" to="/UsaToday">
                    <li className="nav-item">USA Today</li>
                  </NavLink>
              </ul>
            </div>
          
          </div>
        )
    }
  }

export default Navigation;
