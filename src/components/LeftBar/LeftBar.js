import styled from 'styled-components';
import UserHeader from './UserHeader';
import ListPages from './ListPages';
import { Link, useHistory } from 'react-router-dom';
import { IoChatbubbleEllipsesOutline, IoLogInOutline } from "react-icons/io5";
import logo from '../../assets/logo_small.png'
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';


export default function LeftBar(){
    const { userPage } = useContext(UserContext);
    const history = useHistory();
    return(
        <LeftStyle>
            <TopLeft>
                <img alt="" src={logo}/>
                <UserHeader/>
                {userPage.type === "coordinator" ?
                <ListPages/>
                : ""}
            </TopLeft>
            <BottomLeft>
                <Link to="/suport">
                    <IoChatbubbleEllipsesOutline color={'#757D8A'} size={'20px'}/>
                    <p>Suporte</p>
                </Link>
                <Link to="/">
                    <IoLogInOutline color={'#757D8A'} size={'20px'}/>
                    <p>Sair</p>
                </Link>
            </BottomLeft>
        </LeftStyle>
    );
}

const LeftStyle = styled.div`
    background: #F4FFF9;
    width: 26%;
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;
    border-right: 1px solid #E1E3E6;
    p{
        color: #757D8A;
        line-height: 24px;
        font-size: 17px;
        strong{
            font-weight: bold;
        }
    }
`;

const TopLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
        height: 48px;
        width: 178px;
        margin-bottom: 20px;
    }
`;

const BottomLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 65px;
    a{
        display: flex;
        p{
            margin-left: 6px;
        }
    }
`;