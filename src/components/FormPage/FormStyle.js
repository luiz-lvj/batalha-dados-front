import styled from 'styled-components';

const FormStyle = styled.div`
    left: 24%;
    right: 24%;
    width: 52%;
    max-width: 736px;
    top: 70px;
    bottom: 0;
    position: relative;
    margin-top: -250px;
    margin-bottom: -30px;
    h2{
        font-size: 20px;
        font-weight: bold;
        color: #000000;
        display: block;
        margin-bottom: 15px;
    }

`;

export const FormInputs = styled.div`
    background: #FFFFFF;
    margin-top: 60px;
    border-radius: 12px;
    border: 1px solid #E6E6F0;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
    color: #32264D;
    h3{
        font-size: 17px;
        font-weight: bold;
    }
    p{
        color: #9C98A6;
        font-size: 14px;
    }
    input{
        width: 100%;
        margin-top: 12px;
        margin-bottom: 25px;
    }
`;

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: #E6E6F0;
    margin-top: 17px;
    margin-bottom: 10px;
`;

export default FormStyle;