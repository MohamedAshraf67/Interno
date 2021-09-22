import './App.css';
import Home from './components/homepage/homepage';
import About from './components/about/about';
import BI from './components/businessInternships/businessInternships'
import CI from './components/computerItInternships/computerItInternships'
import EI from './components/engineeringInternships/engineeringInternships'
import Essentials from './components/essentials/essentials'
import HI from './components/highSchoolInternships/highSchoolInternships'
import Login from './components/loginPage/loginPage'
import Signup from './components/signUpPage/signUpPage'
import UI from './components/universityInternships/universityInternships'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path = "/nav">
      <NavBar/>
        </Route>
        <Route exact path = "/home">
          <Home />
        </Route>
        <Route exact path = "/about">
          <About />
        </Route>
        <Route exact path = "/BI">
          <BI />
        </Route>
        <Route exact path = "/CI">
          <CI />
        </Route>
        <Route exact path = "/EI">
          <EI />
        </Route>
        <Route exact path = "/essentials">
          <Essentials />
        </Route>
        <Route exact path = "/highschoolinternships">
          <HI />
        </Route>
        <Route exact path = "/login">
          <Login />
        </Route>
        <Route exact path = "/signup">
          <Signup />
        </Route>
        <Route exact path = "/universityinternships">
          <UI />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
