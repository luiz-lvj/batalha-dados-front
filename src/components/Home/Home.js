import styled from 'styled-components';
import logo from '../../assets/logo.png';
import picture from '../../assets/img_home.png';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function Home(){
    const { userPage, setUserPage } = useContext(UserContext);
    const history = useHistory();
    function setCoordinator(){
        let user = {...userPage};
        user.type = "coordinator";
        setUserPage(user);
    }
    function setTeacher(){
        let user = {...userPage};
        user.type = "teacher";
        setUserPage(user);
    }
    function setStudent(){
        let user = {...userPage};
        user.type = "student";
        setUserPage(user);
    }
    return(
        <HomeStyle>
            <Images>
                <LogoStyle alt="" src={logo}/>
                <PictureStyle alt="" src={picture}/>
            </Images>
            <ButtonsLogin>
                <ButtonUser onClick={()=>{
                    setStudent();
                    history.push("/painel");
                    }} back={'#9871F5'}>Sou Aluno</ButtonUser>
                <ButtonUser onClick={()=>{
                    setCoordinator();
                    history.push("/painel");
                    }} back={'#04D361'}>Sou Coordenador</ButtonUser>
                <ButtonUser onClick={()=>{
                    setTeacher();
                    history.push("/painel");
                    }} back={'#6989FE'}>Sou Professor</ButtonUser>
            </ButtonsLogin>
            
        </HomeStyle>
    );
}

const HomeStyle = styled.div`
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;

`;

const Images = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LogoStyle = styled.img`
    height: 8%;
    width: 29.7%;
`;
const PictureStyle = styled.img`
    width: 51.3%;
    height: 29.7%;
`;

const ButtonsLogin = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 40px;
`;

const ButtonUser = styled.button`
        height: 74px;
        width: 30%;
        border-radius: 9px;
        font-weight: bold;
        color: #FFFFFF;
        background: ${props => props.back};
        border: none;
        font-size: 22px;
        &:hover{
            opacity: 0.83;
        }
`;