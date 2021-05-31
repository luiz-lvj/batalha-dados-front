import styled from 'styled-components';

export default function ListSkills(props){
    return(
        <ListStyle>
            {props.skills.map((skill, idx)=> <Skill key={idx} name={skill}/>)}
        </ListStyle>
    );
}

function Skill(props){
    return(
        <SkillStyle>
            <p>{props.name}</p>
        </SkillStyle>
    );
}

const ListStyle = styled.ul`
    height: 120px;
    width: 100%;
    border: 1px solid #E6E6F0;
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    overflow-y: scroll;
`;

const SkillStyle = styled.li`
    height: 35px;
    max-width: 200px;
    background: rgba(7, 162, 135, 0.08);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    padding: 8px;
    margin-bottom: 15px;
    p{
        color: #07A287 !important;
        opacity: 1.0 !important;
    }
`;