import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Cartscreen from "./screens/Cartscreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Route path="/" exact component={Homescreen}></Route>
        <Route path="/cart" exact component={Cartscreen}></Route>
        <Route path="/register" exact component={Registerscreen}></Route>
        <Route path="/login" exact component={Loginscreen}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
