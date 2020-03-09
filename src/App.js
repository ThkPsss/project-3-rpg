import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Opening from "./pages/Opening";
import Start from "./pages/Start";
import Game from "./pages/Game";
import characterCreation from "./pages/characterCreation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Opening} />
          <Route exact path="/Opening" component={Opening} />
          <Route exact path="/characterCreation" component={characterCreation} />
          <Route exact path="/start" component={Start} />
          <Route exact path="/game" component={Game} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
