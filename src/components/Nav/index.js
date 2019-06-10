import React from "react";
import "./style.css";
import logo from "../../assets/images/logo.png";

function Nav(props) {
  return <nav>
          <ul>
            <li className="nav-header">
              <a href="/"><img src={logo} class="logo" /></a>
            </li>

            <li id="right-wrong">{props.rightWrong}</li>

            <li id="current-score">Current Score: {props.score}</li>

            <li id="top-score">Top Score: {props.topScore}</li>
          </ul>
        </nav>
}

export default Nav;
