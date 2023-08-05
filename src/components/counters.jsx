import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  handleReset() {
    const counters = this.state.counters.map((c) => {
      c.count = 0;
      return c;
    });
    this.setState({ counters });
  }
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id != counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-sm btn-success m-2"
          onClick={this.handleReset}
        >
          {" "}
          Reset{" "}
        </button>
        {this.state.counters.map((counter) => (
          <div>
            <Counter
              key={counter.id}
              onDelete={this.handleDelete}
              counter={counter}
            ></Counter>
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
