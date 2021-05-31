import styled from 'styled-components';
import ContentPage from '../utils/ContentPage';
import { HeaderStyle, PageStyle } from '../utils/Header';
import { IoArrowDownOutline, IoTrashOutline } from 'react-icons/io5';
import { MdModeEdit } from 'react-icons/md'
import ButtonStyle from './ButtonStyle';
import { useHistory } from 'react-router';
import { useContext } from 'react';
import DataContext from '../contexts/DataContext';

export default function CoordPanelTeachers(){
    const history = useHistory();
    const {teachers} = useContext(DataContext);
    return(
        <PageStyle>
            <HeaderCoord>
                <h2>Painel Professores</h2>
                <div>
                    <ButtonStyle onClick={() => history.push("/novoprofessor")}>Adicionar Professores</ButtonStyle>
                </div>
            </HeaderCoord>
            <ContentPage>
                <h2>Professores</h2>
                <p>{teachers.length} alunos cadastrados</p>
                <TableTeachers>
                    <tr>
                        <th>Nome <IoArrowDownOutline size={'20px'}/></th>
                        <th>Competências Ministradas <IoArrowDownOutline size={'20px'}/></th>
                        <th></th>
                    </tr>
                    {teachers.map((teacher)=>{
                        return(
                            <TeacherLine
                            img={teacher.img}
                            name={teacher.name}
                            subjects={teacher.subjects}
                            />
                        );
                    })}
                </TableTeachers>
            </ContentPage>
        </PageStyle>
    );
}

function TeacherLine(props){
    return(
        <tr>
            <td> <img alt="" src={props.img}/> <p>{props.name}</p></td>
            <td>
                {Object.keys(props.subjects).map((subject)=>{
                    return subject + ', ';
                })}
            </td>
            <td>
                <div>
                    <MdModeEdit size={'23px'}/> <IoTrashOutline size={'23px'}/>
                </div>
            </td>
        </tr>
    );
}

const TableTeachers = styled.table`
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #757D8A;
    tr th, td{
        text-align: right;
    }
    tr {
        height: 66px;
        padding: 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        &:nth-child(2n){
                background: #F8F8F8;
        }
        th, td{
            display: flex;
            align-items: center;
            width: 40%;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 5px;
            &:last-child{
                width: 8%;
            }
        }
        
    }
    tr td img{
        height: 48px;
        width: 48px;
        border-radius: 48px;
        margin-right: 15px;
    }
    tr td div{
        width: 100%;
        display: flex;
        align-items: right;
        justify-content: space-between;
    }
`;

const HeaderCoord = styled(HeaderStyle)`
    display: flex;
    justify-content: space-between;
`;
