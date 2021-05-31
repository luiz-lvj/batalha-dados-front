import styled from 'styled-components';
import HeaderForm from './HeaderForm';
import FormStyle, { FormInputs, Divider } from './FormStyle';
import { useContext, useState } from 'react';
import BottomForm from './BottomForm';
import DataContext from '../contexts/DataContext';
import { AddSkill, SmallInput } from './FormTeacher';
import ListSkills from '../utils/Skill';

export default function FormStudentSkills(){
    const [year, setYear] = useState("");
    const [semester, setSemester] = useState("");
    const [skills, setSkills] = useState([]);
    const [subject, setSubject] = useState("");
    const [skillInput, setSkillInput] = useState("");

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
                <h2>Você está prestes a cadastrar um aluno</h2>
                <h4>O primeiro passo é preencher o formulário de inscrição</h4>
                <FormInputs>
                    <h3>Quais disciplinas você deseja cadastrar seu aluno</h3>
                    <Divider/>
                    <p>Selecione o ano do aluno.</p>
                    <SelectYear setYear={setYear}/>
                    <p>Selecione o semestre do aluno.</p>
                    <SelectSemester setSemester={setSemester}/>

                    <p>Selecione a matéria de dificuldade do aluno.</p>
                    <SelectSubject setSubject={setSubject}/>
                    <br></br>
                    <p>Insira as Competências que ele tem dificuldade</p>
                    <SmallInput type="text" placeholder="digite as competências"
                    value={skillInput}
                    onChange={e => setSkillInput(e.target.value)}
                    ></SmallInput> <AddSkill onClick={()=>addSkills()}>+</AddSkill>
                    <ListSkills skills={skills}/>
                </FormInputs>
                <BottomForm click={'/'} message={'Salvar Aluno'}/>
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

function SelectYear(props){
    const years = [2014, 2015, 2016, 2017, 2018, 2018, 2020];
    return(
        <SmallSelection id="years" name="years" onChange={e => props.setYear(e.target.value)}>
            {years.map((year, idx)=>{
                return(
                    <option key={idx} value={year}>{year}</option>
                );
            })}
        </SmallSelection>
    );
}
function SelectSemester(props){
    const years = [1,2];
    return(
        <SmallSelection id="semesters" name="semesters" onChange={e => props.setSemester(e.target.value)}>
            {years.map((semester, idx)=>{
                return(
                    <option key={idx} value={semester}>{semester}</option>
                );
            })}
        </SmallSelection>
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
    margin-top: 8px;
    margin-right: 20px;
    margin-bottom: 20px;
`;

const SmallSelection = styled(SelectStyle)`
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 40px;
`;


