import { useHistory } from 'react-router';
import styled from 'styled-components';
import { IoArrowBackOutline } from 'react-icons/io5';

export default function Header(props){
    const history = useHistory();
    return(
        <HeaderStyle>
            <GoBackStyle onClick={()=>history.goBack()}>
                <IoArrowBackOutline color={'#404D61'} size={'32px'}/>
            </GoBackStyle>
            <h2>Seus dados</h2>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    padding: 20px;
    border-bottom: 1px solid #E1E3E6;
    display: flex;
    align-items: center;
    height: 100px;
    h2{
        font-weight: bolder;
        font-size: 32px;
        color: #404D61;
    }
`;

const GoBackStyle = styled.div`
    background: #F8F8F8;
    width: 62px;
    height: 48px;
    border-radius: 99px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

export const PageStyle = styled.div`
    margin-left: 26vw;
    margin-top: 0;
    margin-right: 0;
    background: #FFFFFF;
`;
