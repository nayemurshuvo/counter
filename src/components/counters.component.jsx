import React, { Component } from "react";
import Counter from "./counter.component";

class Counters extends Component {
  render() {
    return (
      this.props.counters.map((counter) => {
        return (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        );
      })
    );
  }
}

export default Counters;
