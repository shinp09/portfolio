import * as React from "react";
import Home from "./components/Page/Home/Home";
import About from "./components/Page/About/About";
import Skill from "./components/Page/Skill/Skill";
import Contact from "./components/Page/Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Organisms/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/About"} component={About} />
          <Route path={"/Skill"} component={Skill} />
          <Route path={"/Contact"} component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
