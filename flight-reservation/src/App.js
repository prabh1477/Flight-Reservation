
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/home.component';
import Nav from './components/nav.component';
import Login from './components/login.component';
import Register from './components/register.component';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>

        <nav className="navbar navbar-expand navbar-light fixed-top">

          <div className="container">
            <Link href="" className="navbar-brand" to={'/'}>Home</Link>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">

                <li className="nav-item">
                  <Link to={'/login'} className="nav-link" >Login</Link>

                </li>

                <li className="nav-item">

                  <Link to={'/register'} className="nav-link">Sign Up</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">

          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/login" component={Login} ></Route>
              <Route exact path="/register" component={Register} ></Route>
            </Switch>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
