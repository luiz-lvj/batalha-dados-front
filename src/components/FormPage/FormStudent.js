import styled from 'styled-components';
import HeaderForm from './HeaderForm';
import FormStyle, { FormInputs, Divider } from './FormStyle';
import { useContext, useState } from 'react';
import SubjectsContext from '../contexts/DataContext';
import BottomForm from './BottomForm';

export default function FormStudent(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [level, setLevel] = useState("");
    const [registration, setRegistration] = useState("");

    const student = {
        name: name,
        email: email,
        level: level,
        registration: registration
    }

    return(
        <FormPageStyle>
            <HeaderForm/>
            <FormStyle>
                <h2>Você está prestes a cadastrar um aluno</h2>
                <h4>O primeiro passo é preencher o formulário de inscrição</h4>
                <FormInputs>
                    <h3>Dados do aluno</h3>
                    <Divider/>
                    <p>Nome completo do aluno</p>
                    <input type="text" placeholder="Digite o nome do aluno"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    ></input>

                    <p>Email do aluno</p>
                    <input type="email" placeholder="Digite o email do aluno"
                    value={email}
                    onChange={e => setEmail(e.target.value)}></input>

                    <p>Série do aluno</p>
                    <input type="text" placeholder="Digite a série do aluno"
                    value={level}
                    onChange={e => setLevel(e.target.value)}></input>

                    <p>Número de matrícula do aluno (apenas números)</p>
                    <input type="text" placeholder="Digite o número de matrícula do aluno"
                    value={registration}
                    onChange={e => setRegistration(e.target.value)}></input>
                </FormInputs>
                <BottomForm click={'/addcompetencias'}message={'Salvar Aluno'}/>
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
`;
