import React, { Component } from "react"; //imrc
//cc
class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <li class="list-unstyled">
            <div>
              <span class="badge bg-primary">{this.props.value}</span>
              <button onClick={() => this.props.onIncrement(this.props.id)} type="button" class="btn btn-secondary m-2">+</button>
              <button onClick={() => this.props.onDecrement(this.props.id)} type="button" class="btn btn-secondary m-2">-</button>
              <button onClick={() => this.props.onDelete(this.props.id)} type="button" class="btn btn-danger m-2">Delete</button>
            </div>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Counter;
