import { IoCloseCircleOutline } from "react-icons/io5";
import styled from "styled-components";
import ButtonStyle from "./ButtonStyle";


export default function CardSubject(props){
    return(
        <CardStyle>
            <DeleteSubject>
                <IoCloseCircleOutline size={'20px'} color={'#6081FC'}/>
            </DeleteSubject>
            <h2>{props.subject}</h2>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <ButtonStyle>Assitir Aula</ButtonStyle>
        </CardStyle>
    );
}

const CardStyle = styled.li`
    position: relative;
    width: 280px;
    height: 278px;
    background: #FFFFFF;
    box-shadow: 0px 18px 40px rgba(112, 144, 176, 0.12);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 30px;
    margin-bottom: 25px;
    padding: 20px;
    p{
        display: block;
        max-height: 120px;
        overflow-y: hidden;
    }
    h3{
        font-size: 20px;
    }
    h2{
        margin-bottom: 0;
        font-size: 24px;
    }
`;

const DeleteSubject = styled.div`
    background: #F4F7FE;
    height: 24px;
    width: 24px;
    border-radius: 24px;
    position: absolute;
    right: 20px;
    top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;