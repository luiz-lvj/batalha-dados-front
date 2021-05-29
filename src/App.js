import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/utils/GlobalStyle';
import Home from './components/Home/Home';
import LeftBar from './components/LeftBar/LeftBar';
import DataPage from './components/DataPage/DataPage';

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <LeftBar/>
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/dados" exact>
        <DataPage/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
