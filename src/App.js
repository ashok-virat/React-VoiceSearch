import "./App.css";
import { Fruits } from "./Component/fruits";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Fruits} />
          <Route exact path="/fruits" component={Fruits} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
