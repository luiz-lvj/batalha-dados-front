import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/utils/GlobalStyle';
import Home from './components/Home/Home';
import LeftBar from './components/LeftBar/LeftBar';
import DataPage from './components/DataPage/DataPage';
import Panel from './components/Panel/Panel';
import FormStudent from './components/FormPage/FormStudent';
import UserContext from './components/contexts/UserContext';
import { useState } from 'react';
import SubjectsContext, { subjects } from './components/contexts/SubjectsContext';

function App() {
  const user = {
    id: 1,
    first_name: "Luiz",
    second_name: "Vasconcelos",
    img: "https://maisbolsas.files.wordpress.com/2016/04/12.jpg?w=663",
    type: ""
  }

  const [userPage, setUserPage] = useState(user);
  return (
    <UserContext.Provider value={{ userPage, setUserPage }}>
      <SubjectsContext.Provider value={{subjects}}>
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
            <Route path="/novoestudante" exact>
              <FormStudent type="create_student"/>
            </Route>
          </Switch>
        </BrowserRouter>
      </SubjectsContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
