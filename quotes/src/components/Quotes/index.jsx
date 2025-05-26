import React from "react";

import "./style.css";

import { ReactComponent as QuotesSVG } from "../../assets/quotes.svg";

export default class Qoutes extends React.Component {
  render() {
    return (
      <div className="quotes">
        <div className="quote">
          <QuotesSVG fill={this.props.color} width={30} height={30} />
          <p className="quote-text" style={{ color: this.props.color }}>
            {this.props.quote}
          </p>
        </div>
        <p className="author" style={{ color: this.props.color }}>
          - {this.props.author}
        </p>
      </div>
    );
  }
}
