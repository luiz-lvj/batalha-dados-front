import Header, {  PageStyle } from '../utils/Header';
import ContentPage from '../utils/ContentPage';
import styled from 'styled-components';
import { useState } from 'react';

export default function DataPage(){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    function isEmailValid(e_address){
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(e_address);
    }
    const user = {
        img: "https://a-static.mlcdn.com.br/618x463/boneco-disney-olaf-frozen-2-interativo-hasbro-f1150/toysnet/15579/eb6ec232ea3c6a117c3aa96a2bddbfc3.jpg",
        name: "Olaf"
    }
    return(
        <PageStyle>
            <Header>
            </Header>
            <ContentPage>
                <LeftContent>
                    <h2>Dados pessoais</h2>
                    <p>Precisamos de suas informações para concluirmos o cadastro na nossa plataforma</p>
                    <InputForm>
                        <p>Endereço de E-mail</p>
                        <BigInput type="email" placeholder="digite seu e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        ></BigInput>
                        {console.log(isEmailValid(email))}
                        {!isEmailValid(email) && email != ""? 
                        <WrongInput>Por favor digite um email válido</WrongInput>
                        : ''}
                        <p>Nome completo</p>
                        <BigInput placeholder="Digite seu nome completo"
                        value={name}
                        onChange={e => e.target.value}
                        ></BigInput>
                        <p>Endereço</p>
                        <BigInput placeholder="Digite seu endereço"
                        value={address}
                        onChange={e => e.target.value}
                        ></BigInput>
                    </InputForm>
                </LeftContent>
                <RightContent>
                    <h3>Perfil</h3>
                </RightContent>
            </ContentPage>
        </PageStyle>
    );
}

const LeftContent = styled.div`
    max-width: 55%;
`;

const InputForm = styled.ul`
    margin-top: 30px;
    p{
        color: #404D61;
        display: block;
        margin-bottom: 8px;
        margin-top: 24px;
    }
    input{
        margin-bottom: 8px;
        margin-right: 8px;
    }
`;

const BigInput = styled.input`
    width: 100%;
    &:focus{

    }
`;

const WrongInput = styled.p`
    color: red !important;
    display: inline;
    margin-top: 0;
    font-size: 13px !important;
    margin-top: 0 !important;
`;

const RightContent = styled.div`
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 25px;
    h3{
        color: #404D61;
        display: block;
        margin-bottom: 8px;
        margin-top: 24px;
        font-size: 16px;
        font-weight: bold;
    }
`;


