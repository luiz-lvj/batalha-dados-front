import styled from 'styled-components';
import HeaderForm from './HeaderForm';
import FormStyle, { FormInputs, Divider } from './FormStyle';
import { useContext, useState } from 'react';
import BottomForm from './BottomForm';
import {FormPageStyle} from './FormStudent';
import DataContext from '../contexts/DataContext';
import ListSkills from '../utils/Skill';
import { useHistory } from 'react-router';
import ClassContext from '../contexts/ClassContext';

export default function FormClass(){
    const history = useHistory();
    const [vLink, setVLink] = useState("");
    const [title, setTitle] = useState("");
    const [skills, setSkills] = useState([]);
    const [subject, setSubject] = useState("");
    const [skillInput, setSkillInput] = useState("");
    const [send, setSend] = useState(false);

    const {setClassPage } = useContext(ClassContext);
    
    const classToWatch = {
        link: vLink, 
        title: title,
        skills: skills,
        subject: subject
    }
    if(send){
        setClassPage(classToWatch);
    }

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
                <h2>Chegou a hora de contribuir para a educação <br/>dos seus alunos (as)</h2>
                <h4>Insira o Link e preencha todos os dados para informar melhor seus estudantes</h4>
                <FormInputs>
                    <h3>Adicionar Aula </h3>
                    <Divider/>
                    <p>Insira o link do seu vídeo (youtube, vimeo, etc.)</p>
                    <input type="text" placeholder="Digite o link"
                    value={vLink}
                    onChange={e => setVLink(e.target.value)}
                    ></input>

                    <p>Insira o título do seu vídeo</p>
                    <input type="text" placeholder="Digite o link"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    ></input>

                   
                    <p>Selecione a Disciplina desse vídeo</p>
                    <SelectSubject setSubject={setSubject}/>

                    <p>Insira as Competências Ensinadas</p>
                    <SmallInput type="text" placeholder="digite as competências"
                    value={skillInput}
                    onChange={e => setSkillInput(e.target.value)}
                    ></SmallInput> <AddSkill onClick={()=>addSkills()}>+</AddSkill>
                    <ListSkills skills={skills}/>
                </FormInputs>
                <BottomForm setSend={setSend} click={'/assistiraula'} message={'Salvar e Publicar'}/>
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