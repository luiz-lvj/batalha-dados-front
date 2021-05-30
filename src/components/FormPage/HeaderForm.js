import styled from "styled-components";
import logo from '../../assets/logo_white.png';
import { IoArrowBackOutline } from 'react-icons/io5'
import { useHistory } from "react-router";

export default function HeaderForm(){
    const history = useHistory();
    return(
        <HeaderPage>
            <HeaderContent>
                <IconsHeader>
                    <div onClick={()=> history.goBack()}>
                        <IoArrowBackOutline color={'#F8F8F8'} size={'20px'}/>
                    </div>
                    <img alt="" src={logo}></img>
                </IconsHeader>
            </HeaderContent>
        </HeaderPage>
    );
}

export const HeaderPage = styled.div`
    position: relative;
    background: #04D361;
    top: 0;
    left: 0;
    right: 0;
    height: 300px;
    justify-content: center;
`;

export const HeaderContent = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    display: flex;
    flex-direction: column;
    padding: 15px;
`;

export const IconsHeader = styled.div`
    display: flex;
    div{
        height: 48px;
        width: 62px;
        background: #FFFFFF;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
    }
`;
