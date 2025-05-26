import React from "react";

import "./style.css";

export default class Button extends React.Component {
  handleClick = (link) => {
    if (link) {
      window.location.href = link;
    }

    if (this.props.handleGenerateQuote) {
      this.props.handleGenerateQuote();
    }
  };

  render() {
    const { children, style, link, color } = this.props;

    return (
      <button
        style={{
          backgroundColor: color,
          ...style,
        }}
        className="button"
        onClick={() => this.handleClick(link)}
      >
        {children}
      </button>
    );
  }
}
