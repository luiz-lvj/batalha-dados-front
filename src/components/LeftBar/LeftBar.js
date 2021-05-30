import styled from 'styled-components';
import UserHeader from './UserHeader';
import ListPages from './ListPages';
import { Link } from 'react-router-dom';
import { IoChatbubbleEllipsesOutline, IoLogInOutline } from "react-icons/io5";


export default function LeftBar(){
    return(
        <LeftStyle>
            <TopLeft>
                <UserHeader/>
                <ListPages/>
            </TopLeft>
            <BottomLeft>
                <Link to="/suport">
                    <IoChatbubbleEllipsesOutline color={'#757D8A'} size={'20px'}/>
                    <p>Suporte</p>
                </Link>
                <Link to="/logout">
                    <IoLogInOutline color={'#757D8A'} size={'20px'}/>
                    <p>Sair</p>
                </Link>
            </BottomLeft>
        </LeftStyle>
    );
}

const LeftStyle = styled.div`
    background: #F8F8F8;
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