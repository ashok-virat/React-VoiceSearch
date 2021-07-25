import "./App.css";
import Voice from "./Component/voice";
import { Fruits } from "./Component/fruits";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Voice} />
          <Route exact path="/fruits" component={Fruits} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
