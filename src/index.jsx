import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
// import react redux
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import moviesApp from './reducers/reducers';

// import main view
// DELETE the curly braces
/// REACT REDUX
import { MainView } from "./components/main-view/main-view";

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';


// activate for Task 3.8
// const store = createStore (movieApp);


// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render () { 
  return (
    // <Provider store={store}> 
      <Container>
        <MainView />
      </Container>
    // </Provider>
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];
// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);