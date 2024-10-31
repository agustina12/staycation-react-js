import landingPage from "pages/landingPage";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={landingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
