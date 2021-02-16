import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../App.css";

class CityCard extends React.Component {

  render() {
    return (

          <a className={this.props.className} href="#">
            <div
              className="card__background"
            >
              <img src="https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt=""/>
            </div>
            <div className="card__content">
              <p className="card__category">tkt</p>
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </a>
    );
  }
}

export default CityCard;
