import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NewUser from "./components/NewUser";
import TestPage01 from "./components/TestPage01";
import TestPage02 from "./components/TestPage02";
import TestPage03 from "./components/TestPage03";
import Results from "./components/Results";
import Members from './components/Members';
// import axios from 
// import App from './App';



function App(props) {
     

 
  //*******  RETURN STARTS HERE  **********
  return (
    <>
      <Navbar />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/testPage01" component={TestPage01} />
          <Route path="/about" component={About} />
          <Route path="/newUser" component={NewUser} />
          <Route path="/testPage01" component={TestPage01} />
          <Route path="/testPage02" component={TestPage02} />
          <Route path="/testPage03" component={TestPage03} />
          <Route path="/results" component={Results} />
          <Route path="/members" component={Members} />
          {/* <Route path="/testPage04" component={TestPage04} /> */}
          
          < Route component={Error} />
        </Switch>
    </>
  );
}

export default App;
