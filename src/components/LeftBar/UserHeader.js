import styled from 'styled-components';
import Config from './Config';

export default function UserHeader(){
    const user = {
        img: "https://a-static.mlcdn.com.br/618x463/boneco-disney-olaf-frozen-2-interativo-hasbro-f1150/toysnet/15579/eb6ec232ea3c6a117c3aa96a2bddbfc3.jpg",
        name: "Olaf"
    }

    return(
        <UserStyle>
            <div>
                <img src={user.img}alt=""></img>
                <p>Bem-vindo, <strong>{user.name}</strong></p>
            </div>
            <Config/>
        </UserStyle>
    );
}

const UserStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img{
        height: 64px;
        width: 64px;
        border-radius: 32px;
        margin-right: 8px
    }
    div{
        display: flex;
        max-width: 60%;
    }
`