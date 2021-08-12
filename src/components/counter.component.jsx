import React, { Component } from "react"; //imrc
//cc
class Counter extends Component {
  state = {
    items: [1, 2],
    items2: [1, 2],
  };

  formatCount = () => {
    if (this.state.items[0] == 0) return "Zero";
    return this.state.items[0];
  };

  formatCount2 = () => {
    if (this.state.items2[0] == 0) return "Zero";
    return this.state.items2[0];
  };

  handleIncrement = () => {
    const arra = [...this.state.items]; // array destructuring
    arra[0]++;
    this.setState({ items: arra }); //state re update kora
  };

  handleIncrement2 = () => {
    const arra = [...this.state.items2]; // array destructuring
    arra[0]++;
    this.setState({ items2: arra }); //state re update kora
  };

  handleDecrement = () => {
    const arra = [...this.state.items];
    arra[0]--;
    this.setState({ items: arra });
  };

  handleDecrement2 = () => {
    const arra = [...this.state.items2];
    arra[0]--;
    this.setState({ items2: arra });
  };

  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar <span class="badge bg-secondary">4</span>
            </a>
          </div>
        </nav>

        <button type="button" class="btn btn-primary m-4">
          Reset
        </button>

        <ul>
          <li class="list-unstyled">
            <div>
              <span class="badge bg-primary">{this.formatCount()}</span>
              <button
                onClick={this.handleIncrement}
                type="button"
                class="btn btn-secondary m-2"
              >
                +
              </button>
              <button
                onClick={this.handleDecrement}
                type="button"
                class="btn btn-secondary m-2"
              >
                -
              </button>
              <button type="button" class="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li>

          <li class="list-unstyled">
            <div>
              <span class="badge bg-primary">{this.formatCount2()}</span>
              <button
                onClick={this.handleIncrement2}
                type="button"
                class="btn btn-secondary m-2"
              >
                +
              </button>
              <button
                onClick={this.handleDecrement2}
                type="button"
                class="btn btn-secondary m-2"
              >
                -
              </button>
              <button type="button" class="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li>

          <li class="list-unstyled">
            <div>
              <span class="badge bg-secondary">Zero</span>
              <button type="button" class="btn btn-secondary m-2">
                +
              </button>
              <button type="button" class="btn btn-secondary m-2">
                -
              </button>
              <button type="button" class="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </React.Fragment> //empty rakha jay evabe=> </>
    );
  }
}

export default Counter; //imrc,cc
