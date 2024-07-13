import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: "Mary James",
      bio: "A passionate developer with expertise in React.",
      imgSrc: "assets/profile.jpg",
      profession: "Software Engineer"
    },
    shows: true,
    intervalId: null,
    mountedTime: 0
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 });
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, mountedTime } = this.state;

    return (
      <div className="App">
        <h1>Work Profile</h1>
        {shows && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} className="profile-img" />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <h4>{profession}</h4>
          </div>
        )}
        <div className="button-container">
          <button onClick={this.toggleShow} className="btn btn-primary">
            {shows ? "Hide Profile" : "Show Profile"}
          </button>
        </div>
        <div className="timer">
          <p>Component mounted for: {mountedTime} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;
