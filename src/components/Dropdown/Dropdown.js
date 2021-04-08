import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { menuItems } from '../../data/NavItems';
import { FaTimes } from 'react-icons/fa';
import { Button } from '../Buttons/PrimaryButton';

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 102;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: 1;
`;

const Icon = styled.div`

`;
const CloseIcon = styled(FaTimes)`

`;

const DropdownMenu = styled.div`

`;
const DropdownLink = styled(Link)`

`;
const ButtonWrap = styled.div`

`;

const Dropdown = () => {
    return (
        <DropdownContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <div>
                <DropdownMenu>
                     { menuItems.map((item, idx) => (
                    <DropdownLink to={item.link} key={idx}>
                        {item.title}
                    </DropdownLink>
                     ))}
                    <ButtonWrap>
                        <Button pimary="true" round="true" big="true" to="/contact">
                            Contact Us
                        </Button>
                    </ButtonWrap>
                </DropdownMenu>
            </div>
        </DropdownContainer>
    )
}

export default Dropdown