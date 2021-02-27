import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AddUser from "./pages/Users/AddUser";
import ViewUser from "./pages/Users/ViewUser";
import UpdateUser from "./pages/Users/UpdateUser";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/add" component={AddUser} />
          <Route path="/users/:id" component={ViewUser} />
          <Route path="/edit/:id" component={UpdateUser} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
