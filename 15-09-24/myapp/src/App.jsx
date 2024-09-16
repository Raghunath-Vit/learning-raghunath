import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AxiosExample from './components/AxiosExample';
import CancelRequestExample from './components/CancelRequestExample';
import Immer from './components/Immer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
  }

  toggleShow = () => {
    this.setState((state) => ({ isShow: !state.isShow }));
  };

  render() {
    const greeting = 'Welcome to React';
    return (
      <>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/axios-example">Axios Example</Link>
                </li>
                <li>
                  <Link to="/cancel-request-example">Cancel Request Example</Link>
                </li>
                <li>
                  <Link to="/immer">Immer Example</Link>
                </li>
              </ul>
            </nav>

            {/* Wrap all Routes with element prop */}
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    {this.state.isShow ? <Greeting greeting={greeting} /> : null}
                    <button onClick={this.toggleShow} type="button">
                      Toggle Show
                    </button>
                  </div>
                }
              />
              <Route path="/axios-example" element={<AxiosExample />} />
              <Route path="/cancel-request-example" element={<CancelRequestExample />} />
              <Route path="/immer" element={<Immer />} />
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}

// Greeting Component
class Greeting extends Component {
  render() {
    return <h1>{this.props.greeting}</h1>;
  }
}

export default App;
