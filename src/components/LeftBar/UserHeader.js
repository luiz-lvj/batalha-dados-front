import { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import Config from './Config';

export default function UserHeader(){
    const { userPage, setUserPage } = useContext(UserContext);

    return(
        <UserStyle>
            <div>
                <img src={userPage.img}alt=""></img>
                <p>Bem-vindo, <strong>{userPage.first_name} {userPage.second_name}</strong></p>
            </div>
            <Config/>
        </UserStyle>
    );
}

const UserStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100px !important;
    align-items: center;
    
    div{
        display: flex;
        max-width: 60%;
        align-items: center;
        img{
            height: 64px;
            width: 64px !important;
            border-radius: 32px;
            margin-right: 8px
        }
    }
`