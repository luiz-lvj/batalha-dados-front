import styled from "styled-components"
import ButtonStyle from "../Panel/ButtonStyle";
import { IoWarningOutline } from 'react-icons/io5';

export default function BottomForm(props){
    return(
        <BottomStyle>
            <div>
                <IoWarningOutline color={'#04D361'} size={'32px'}/>
                <p>Importante!<br/>Preencha todos os dados</p>
            </div>
            <ButtonStyle>{props.message}</ButtonStyle>
        </BottomStyle>
    );
}
export const BottomStyle = styled.div`
    height: 136px;
    background: #FAFAFC;
    padding: 50px;
    display: flex;
    justify-content: space-between;
    div{
        display: flex;
        p{
            display: block;
            margin-left: 8px;
            font-size: 14px;
        }
    }
`;