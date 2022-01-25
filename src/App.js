import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
// css
import "./App.css";

//pages and components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/sign-up/Signup";
import Navbar from "./components/navbar/Navbar";

function App() {
  const { authIsReady } = useAuthContext();
  return (
    <div className="App">
      {!authIsReady && <div>Loading...</div>}
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
