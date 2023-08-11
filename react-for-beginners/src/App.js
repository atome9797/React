// React에 기본적으로 내장되어 있는 useState와, useEffect 불러오기
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    
  return <Router>
    <Switch>
      <Route path="/hello">
        <h1>asdasd</h1>
      </Route>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}

export default App;