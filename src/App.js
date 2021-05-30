import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/utils/GlobalStyle';
import Home from './components/Home/Home';
import LeftBar from './components/LeftBar/LeftBar';
import DataPage from './components/DataPage/DataPage';
import Panel from './components/Panel/Panel';

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      
      <Route path="/painel" exact>
        <LeftBar/>
        <Panel/>
      </Route>
      <Route path="/dados" exact>
        <LeftBar/>
        <DataPage/>
      </Route>
      <Route path="/licao" exact>
        <LeftBar/>
      </Route>
      <Route path="/estatistica" exact>
        <LeftBar/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
