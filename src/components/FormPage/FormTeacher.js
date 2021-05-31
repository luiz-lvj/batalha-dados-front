import styled from 'styled-components';
import HeaderForm from './HeaderForm';
import FormStyle, { FormInputs, Divider } from './FormStyle';
import { useContext, useState } from 'react';
import BottomForm from './BottomForm';
import {FormPageStyle} from './FormStudent';
import DataContext from '../contexts/DataContext';
import ListSkills from '../utils/Skill';
import { useHistory } from 'react-router';

export default function FormTeacher(){
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [skills, setSkills] = useState([]);
    const [subject, setSubject] = useState("");
    const [skillInput, setSkillInput] = useState("");

    const teacher = {
        name: name,
        email: email,
        subject: subject,
        skills: skills
    }
    console.log(teacher);

    function addSkills(){
        if(skillInput === ""){
            return;
        }
        const newSkills = [...skills, skillInput];
        setSkills(newSkills);
        setSkillInput("");
    }
    return(
        <FormPageStyle>
            <HeaderForm/>
            <FormStyle>
                <h2>Você está prestes a cadastrar um professor</h2>
                <h4>O primeiro passo é preencher o formulário de inscrição</h4>
                <FormInputs>
                    <h3>Dados do professor</h3>
                    <Divider/>
                    <p>Nome completo do professor</p>
                    <input type="text" placeholder="Digite o nome do professor"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    ></input>

                    <p>Email do professor</p>
                    <input type="email" placeholder="Digite o email do professor"
                    value={email}
                    onChange={e => setEmail(e.target.value)}></input>

                    <p>Selecione a Disciplina do professor</p>
                    <SelectSubject setSubject={setSubject}/>

                    <p>Insira as Competências que ele Ensina</p>
                    <SmallInput type="text" placeholder="digite as competências"
                    value={skillInput}
                    onChange={e => setSkillInput(e.target.value)}
                    ></SmallInput> <AddSkill onClick={()=>addSkills()}>+</AddSkill>
                    <ListSkills skills={skills}/>
                </FormInputs>
                <BottomForm onClick={()=>{
                    history.push("/");
                }}message={'Salvar Professor'}/>
            </FormStyle>
        </FormPageStyle>
    );
}

function SelectSubject(props){
    const { subjects } = useContext(DataContext);
    return(
        <SelectStyle id="subjects" name="subjects" onChange={e => props.setSubject(e.target.value)}>
            {subjects.map((subject, idx)=>{
                return(
                    <option key={idx} value={subject}>{subject}</option>
                );
            })}
        </SelectStyle>
    );
}
const SelectStyle = styled.select`
    border: none;
    background: #FFFFFF;
    border-radius: 8px;
    height: 40px;
    width: 50%;
    border: 1px solid #E6E6F0;
    margin-top: 10px;
    margin-bottom: 15px;
`;

export const SmallInput = styled.input`
    width: 70% !important;
    margin-right: 30px;
`;

export const AddSkill = styled.button`
    color: #FFFFFF;
    background: rgba(7, 162, 135, 0.5);
    height: 45px;
    width: 45px;
    font-weight: bolder;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    display: inline;
    border-radius: 45px;
`;

