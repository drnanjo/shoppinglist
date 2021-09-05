import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import LifeLine from "./pages/navbar/LifeLine"
import MainSail from "./pages/navbar/MainSail"
import SailBag from "./pages/navbar/SailBag"
import Anchor from "./pages/navbar/Anchor"
import Footer from "./pages/navbar/Footer"


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/LifeLine' component={LifeLine} />
        <Route path='/' exact component={MainSail} />
        <Route path='/SailBag' component={SailBag} />
        <Route path='/Anchor' component={Anchor} />     
      </Switch>
    </Router>
  );
}



export default App;
