import React from 'react';
import './sass/materialize.scss';
import './App.css';
class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <div>Material SCSS</div>
          </div>
        </nav>
        <h1>Normal CSS</h1>
      </div>
    );
  }
}
export default App;
