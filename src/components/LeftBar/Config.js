import styled from 'styled-components';
import { IoSettingsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Config(){
    return(
        <ConfigStyle>
            <Link to="/settings">
                <IoSettingsOutline color={'#757D8A'} size={'25px'}/>
            </Link>
        </ConfigStyle>
    );
}

const ConfigStyle = styled.div`
    background: #FFFFFF;
    padding: 20px;
    height: 50px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #E1E3E6;
`