import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./Containers/Dashboard";

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Redirect to="/" />
    </Switch>
  );

  return <div>{routes}</div>;
}

export default App;
