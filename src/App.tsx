import * as React from "react";
import Home from "./components/Page/Home";
import About from "./components/Page/About";
import Skill from "./components/Page/Skill";
import Contact from "./components/Page/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Organisms/Header/Header";
import style from "./App.module.scss";
import Border from "./components/Atoms/Border/Border";

function App() {
  return (
    <div className={style.App}>
      <Border />
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
