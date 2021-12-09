import './App.css';

import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Main from '../Main/Main.jsx'
import SavedCards from '../SavedCards/SavedCards';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
          <Route  exact path="/">
              <Main />
          </Route>
          <Route  exact path="/saved-cards">
              <SavedCards />
          </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
