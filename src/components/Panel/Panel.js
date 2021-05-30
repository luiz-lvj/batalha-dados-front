
import { useContext } from 'react';
import { useHistory } from 'react-router';
import UserContext from '../contexts/UserContext';
import CoordPanel from './CoordPanel';
import StudentPanel from './StudentPanel';

export default function Panel(){
    const {userPage} = useContext(UserContext);
    const history = useHistory();
    if(userPage.type === ""){
        history.push("/");
        return "";
    }
    if(userPage.type === "coordinator"){
        return(
            <CoordPanel/>
        );
    }
    if(userPage.type === "student"){
        return(
            <StudentPanel/>
        );
    }
    if(userPage.type === "teacher"){
        return(
            <div>a</div>
        );
    }
    
}