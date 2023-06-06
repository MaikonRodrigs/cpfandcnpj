import styled from 'styled-components'
import { Refresh } from '@styled-icons/boxicons-regular/Refresh'
import { FileCopy } from '@styled-icons/remix-fill/FileCopy'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    position: relative;

`;
export const Title = styled.h1`
    margin-top: -10px;
`;

export const Copy = styled.div`
    position: absolute;
    top: 60px;
    left: 50px;
`;

export const Form = styled.div`
    width: 100%;
    display: flex;
    flex: 1;    
    gap: 10px;
`;

export const CpfChecked = styled.input`
    border-radius: 3px;
  transition: all 150ms;
`;

export const CpfInput = styled.input`
    font-size: 18px;
    text-align: center;
`;

export const CnpjInput = styled.input`
    font-size: 18px;
    text-align: center;
`;

export const Button = styled.button`
    padding: 10px;
    cursor: pointer;
`;

export const IconRefresh = styled(Refresh)`
    width: 30px;
    color: #fff;
`;

export const IconFileCopy = styled(FileCopy)`
    width: 25px;
    color: #fff;
`;
