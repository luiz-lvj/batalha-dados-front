import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/utils/GlobalStyle';
import Home from './components/Home/Home';
import LeftBar from './components/LeftBar/LeftBar';
import DataPage from './components/DataPage/DataPage';
import Panel from './components/Panel/Panel';
import FormStudent from './components/FormPage/FormStudent';
import FormTeacher from './components/FormPage/FormTeacher';
import UserContext from './components/contexts/UserContext';
import { useState } from 'react';
import DataContext, { dataUsable }  from './components/contexts/DataContext';
import CoordPanelTeachers from './components/Panel/CoordPanelTeachers';
import FormStudentSkills from './components/FormPage/FormStudentSkills';
import FormClass from './components/FormPage/FormClass';
import ClassContext from './components/contexts/ClassContext';
import WatchForm from './components/FormPage/WatchForm';

function App() {
  const user = {
    id: 1,
    first_name: "Luiz",
    second_name: "Vasconcelos",
    img: "https://maisbolsas.files.wordpress.com/2016/04/12.jpg?w=663",
    type: ""
  }
  const [userPage, setUserPage] = useState(user);
  const [classPage, setClassPage] = useState({});
  return (
    <UserContext.Provider value={{ userPage, setUserPage }}>
      <DataContext.Provider value={{...dataUsable}}>
        <ClassContext.Provider value={{ classPage, setClassPage }}>
          <BrowserRouter>
            <GlobalStyle/>
            <Switch>
              <Route path="/" exact>
                <Home/>
              </Route>
              
              <Route path="/painel_alunos" exact>
                <LeftBar/>
                <Panel/>
              </Route>
              <Route path="/dados" exact>
                <LeftBar/>
                <DataPage/>
              </Route>
              <Route path="/painel_professores" exact>
                <LeftBar/>
                <CoordPanelTeachers/>
              </Route>
              <Route path="/novoprofessor" exact>
                <FormTeacher/>
              </Route>
              <Route path="/novoestudante" exact>
                <FormStudent/>
              </Route>
              <Route path="/painel" exact>
                <LeftBar/>
                <Panel/>
              </Route>
              <Route path="/addcompetencias" exact>
                <FormStudentSkills/>
              </Route>
              <Route path="/addaula" exact>
                <FormClass/>
              </Route>
              <Route path="/assistiraula" exact>
                <WatchForm/>
              </Route>
            </Switch>
          </BrowserRouter>
        </ClassContext.Provider>
      </DataContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
