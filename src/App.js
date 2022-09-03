import Navbar from "./common/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route to="/" exact component={Home} />
      </Switch>
    </>
  );
}

export default App;
