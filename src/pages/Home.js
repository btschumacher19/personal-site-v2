import styled from 'styled-components';
import Hero from '../components/Hero/Hero';
import Info from '../components/Content/InfoOne';
import { InfoDataOne, InfoDataTwo, InfoDataThree } from '../data/InfoData'
import InfoTwo from '../components/Content/InfoTwo';


const StyledHeader = styled.h1`

    font-size: 8vw;
    text-align: end;
    width: 90%;
    margin: 200px auto 50px auto;
    border-bottom: solid 1px #C5C392;
    font-family: 'Abril Fatface', cursive;
    line-height: .9;

    @media screen and (max-width: 768px) {
    font-size: 14vw;
    text-align: center;
    width: 100%;
    }

`;
function Home( props ) {
    return (
        <>
            <Hero />
            < InfoTwo />
            <div style={{width: '100%', height: '100%'}}>
            <StyledHeader >Projects.</StyledHeader>
            <Info { ...InfoDataOne }/>
            <Info { ...InfoDataThree } />
            <Info { ...InfoDataTwo } />
            </div>
        </>
    )
}

export default Home
