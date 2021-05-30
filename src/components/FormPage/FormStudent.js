import styled from 'styled-components';
import HeaderForm from './HeaderForm';
import FormStyle, { FormInputs, Divider } from './FormStyle';
import { useContext } from 'react';
import SubjectsContext from '../contexts/SubjectsContext';

export default function FormStudent(){
    const titleHeader = "Você está prestes a cadastrar um aluno";
    const textHeader = "Preencha o Formulário de Inscrição";
    return(
        <FormPageStyle>
            <HeaderForm/>
            <FormStyle>
                <h2>Você está prestes a cadastrar um aluno</h2>
                <p>O primeiro passo é preencher o formulário de inscrição</p>
                <FormInputs>
                    <h3>Dados do aluno</h3>
                    <Divider/>
                    <p>Nome completo do aluno</p>
                    <input type="text" placeholder="Digite o nome do aluno"></input>

                    <p>Email do aluno</p>
                    <input type="email" placeholder="Digite o email do aluno"></input>

                    <p>Série do aluno</p>
                    <input type="text" placeholder="Digite a série do aluno"></input>

                    <p>Número de matrícula do aluno (apenas números)</p>
                    <input type="text" placeholder="Digite o número de matrícula do aluno"></input>

                    <h3>Quais disciplinas deseja cadastrar seu aluno</h3>
                    <Divider/>
                    <SelectSubject/>
                </FormInputs>
            </FormStyle>
        </FormPageStyle>
    );
}

function SelectSubject(){
    const { subjects } = useContext(SubjectsContext);
    return(
        <SelectStyle id="subjects" name="subjects">
            {subjects.map((subject, idx)=>{
                return(
                    <option key={idx} value={subject}>{subject}</option>
                );
            })}
        </SelectStyle>
    );
}

export const FormPageStyle = styled.div`
    overflow-y: scroll;
    z-index: 0;
`;

const SelectStyle = styled.select`
    border: none;
    background: #FFFFFF;
    border-radius: 8px;
    height: 40px;
    width: 50%;
    border: 1px solid #E6E6F0;
    &::-moz-selection{
        background: #FFFFFF;
    }
`;

