import styled from 'styled-components';
import Hero from '../components/Hero/Hero';
import Info from '../components/Content/InfoOne';
import { InfoDataOne, InfoDataTwo, InfoDataThree, InfoDataFour } from '../data/InfoData'
import InfoTwo from '../components/Content/InfoTwo';
import Aos from 'aos';
import 'aos/dist/aos.css'


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

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;

    @media screen and (max-width: 768px) {
        height: auto;
    }
`;

function Home( props ) {
    return (
        <>
            <Hero />
            < InfoTwo />
            <Section id="projects">
            <StyledHeader data-aos="slide-right">Projects.</StyledHeader>
            <Info { ...InfoDataOne }/>
            <Info { ...InfoDataThree } />
            <Info { ...InfoDataTwo } />
            <Info { ...InfoDataFour } />
            </Section>
        </>
    )
}

export default Home
