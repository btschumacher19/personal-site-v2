import styled, { css }  from 'styled-components';
import { Link } from 'react-router-dom';

const buttonBase = css`
    white-space: nowrap;
    
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: ${({round}) => (round ? '30px' : '2px')};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: ${({big}) => (big ? '16px 40px' : '8px 20px')};
    color: ${({primary}) => (primary ? 'black' : '#fff')};
    font-size: ${({big}) => (big ? '20px' : '14px')};
    

`;

export const Button = styled(Link)`
    background-color: ${({  primary  }) => (primary ? '#fff' : 'grey')};
    border: none;
    ${buttonBase}

    &:hover {
        background: none;
        border: solid 2px #92d1a2;
        color: #92d1a2;
}
`;

export const SecondaryButton = styled(Link)`
    background:${({  primary  }) => (primary ? '#fff' : 'black')};
    border: ${({  primary  }) => (primary ? 'none' : 'solid 1px grey')};
    ${buttonBase}

    &:hover {
        border: dashed 1px #92d1a2;
        color: #92d1a2;
    }
`;