import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBpUg7n88Wdkf3muaYn8SgwLehdeBh-0O0';

// Create a new component. This component should produce
// some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
