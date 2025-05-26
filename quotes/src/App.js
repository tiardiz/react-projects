import React from "react";

import "./App.css";

import Quotes from "./components/Quotes";
import Actions from "./components/Actions";

import quotesData from "./data/quotes.json";

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

function generateRandom() {
  const randomArrayIndex = Math.floor(Math.random() * quotesData.quotes.length);
  const randomIndexColor = Math.floor(Math.random() * colors.length);

  const quote = {
    quote: quotesData.quotes[randomArrayIndex].quote,
    author: quotesData.quotes[randomArrayIndex].author,
    color: colors[randomIndexColor],
  };

  return quote;
}
class App extends React.Component {
  state = {
    quote: generateRandom(),
  };

  handleGenerateQuote = () => {
    this.setState({ quote: generateRandom() });
  };

  render() {
    const { quote } = this.state;

    return (
      <div
        style={{
          backgroundColor: quote.color,
        }}
        className="App"
      >
        <div className="quotes-container">
          <Quotes
            quote={quote.quote}
            author={quote.author}
            color={quote.color}
          />
          <hr />
          <Actions
            handleGenerateQuote={this.handleGenerateQuote}
            color={quote.color}
          />
        </div>
      </div>
    );
  }
}

export default App;
