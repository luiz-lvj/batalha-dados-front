
import CoordPanel from './CoordPanel';
import StudentPanel from './StudentPanel';

export default function Panel(){
    const user = {
        type: "student"
    }
    if(user.type === "coordinator"){
        return(
            <CoordPanel/>
        );
    }
    if(user.type === "student"){
        return(
            <StudentPanel/>
        );
    }
    
}