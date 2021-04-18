import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { menuItems } from '../../data/NavItems';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from '../Buttons/PrimaryButton';

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 102;
    width: 100%;
    height: 100%;
    background: black;
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    top: ${({ isOpen }) => isOpen ? '0px' : '-100%'};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;
const CloseIcon = styled(AiOutlineClose)`
    color: #fff;
`;

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px)
    }
`;

const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: black;
    }
`;

const ButtonWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const Dropdown = ( props ) => {
    return (
        <DropdownContainer isOpen= { props.isOpen } toggle={ props.toggle }>
            <Icon onClick={ props.toggle }>
                <CloseIcon />
            </Icon>
            <div>
                <DropdownMenu>
                     { menuItems.map((item, idx) => (
                    <DropdownLink to={item.link} key={idx}>
                        {item.title}
                    </DropdownLink>
                     ))}
                    </DropdownMenu>
                    <ButtonWrap>
                        <Button  primary="true" round="true" big="true" to="/contact">
                            Contact Me
                        </Button>
                    </ButtonWrap>
                
            </div>
        </DropdownContainer>
    )
}

export default Dropdown