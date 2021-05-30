import styled from "styled-components"
import ContentPage from "../utils/ContentPage"
import { HeaderStyle, PageStyle } from "../utils/Header"
import CardSubject from "./CardSubject";

export default function StudentPanel(){
    const materias = [
        {
            subject: "Matemática",
            name: "Multiplicação",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        },
        {
            subject: "Matemática",
            name: "Multiplicação",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        },
        {
            subject: "Matemática",
            name: "Multiplicação",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        },
        {
            subject: "Matemática",
            name: "Multiplicação",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        },
        {
            subject: "Matemática",
            name: "Multiplicação",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        }
    ];
    return(
        <PageStyle>
            <HeaderStudent>
                <h2>Painel</h2>
            </HeaderStudent>
            <ContentPage>
                <h2>Disciplinas</h2>
                <p>{materias.length} matérias cadastradas.</p>
                <Subjects>
                    {materias.map((subject)=>{
                        return(
                            <CardSubject
                            subject={subject.subject}
                            name={subject.name}
                            description={subject.description}
                            />
                        );
                    })}
                </Subjects>
            </ContentPage>
        </PageStyle>
    );
}

const HeaderStudent = styled(HeaderStyle)``;

const Subjects = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
`