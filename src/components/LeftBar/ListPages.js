import styled from 'styled-components';
import { IoHomeOutline, IoMenuOutline, IoPieChartOutline, IoBagOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';

export default function ListPages(){
    const location = useLocation();

    const pages = [
        {
            name: "Painel",
            icon: <IoHomeOutline color={'#757D8A'} size={'20px'}/>,
            link: "/painel"
        },
        {
            name: "Lição",
            icon: <IoBagOutline color={'#757D8A'} size={'20px'}/>,
            link: "/licao"
        },
        {
            name: "Estatísticas",
            icon: <IoPieChartOutline color={'#757D8A'} size={'20px'}/>,
            link: "/estatistica"
        }
    ]
    return(
        <ListStyle>
            {pages.map((page, idx)=>{
                return(
                    <Link to={page.link} key={idx}>
                        <LinkPage selected={{...location}.pathname === page.link ? true : false}>
                            <div>
                                {page.icon}
                                <p>{page.name}</p>
                            </div>
                            <IoMenuOutline color={'#757D8A'} size={'20px'}/>
                        </LinkPage>
                    </Link>
                );
            })}
        </ListStyle>
    );
}

const ListStyle = styled.ul`
    margin-top: 10px;
`;

const LinkPage = styled.li`
    display: flex;
    padding: 17px;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    background: ${props => props.selected ? '#FFFFFF' : 'inherit' };
    div{
        display: flex;
        width: 50%;
    }
    p{
        display: inline-block;
        margin-left: 6px;
    }
    
`;