import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    ${({  primary  }) => (primary ? '#000d1a' : '#CD853F')};
    white-space: nowrap;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    background: #fff;
    /* background: rgb(255,231,245); */
    /* background: linear-gradient(344deg, rgba(255,231,245,1) 0%, rgba(255,225,243,0.8957816377171216) 41%, rgba(255,237,247,1) 100%); */
    border-radius: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: ${({big}) => (big ? '16px 40px' : '9px 20px')};
    color: ${({primary}) => (primary ? 'black' : '#00d1a')};
    font-size: ${({big}) => (big ? '20px' : '14px')};

    &:hover {
        transform: translateY(-2px);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 9px -1px, rgba(0, 0, 0, 0.3) 0px 6px 6px -1px;;
    }
`;