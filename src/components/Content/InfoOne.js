import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { AiFillGithub, AiOutlineYoutube, AiOutlineLink } from 'react-icons/ai'
import { FiFigma } from 'react-icons/fi'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;

    @media screen and (max-width: 768px) {
        height: auto;
    }
`;

const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    height: 100%;
    display: ${({ landscape }) => (landscape ? 'flex' : 'grid')};
    grid-template-columns: 1fr 1fr;
    flex-direction: column;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
        padding: .2rem;
        grid-template-columns: 1fr;
        grid-template-rows: auto;

    }

    h1, p {
        text-shadow: 0 0 20px rgba(0,0,0,0.2);
    }

    img {
        border-radius: 6px;
    }

    div {
        margin-bottom: 1rem;
    }
`;

const ColumnLeft = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '2' : '1')};
    
    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem)
    }
    p {
        margin-bottom: 2rem;
    }
    @media screen and (max-width: 768px) {
            height: 70%;
        }
`;

const ColumnRight = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    order: ${({ reverse }) => (reverse ? '1' : '2')};

    img {
        width: 100%;
        height: 100%;
        object-fit: fill;

        @media screen and (max-width: 1100px) {
            height: 80%;
        }

        @media screen and (max-width: 900px) {
            height: 60%;
        }

        @media screen and (max-width: 768px) {
            height: 100%;
        }
    }

    @media screen and (max-width: 768px) {
        order: ${({ reverse }) => (reverse ? '2' : '1')};
    }
`;

const LightPara = styled.p`
font-weight: 300;
`;

const IconBar = styled.div`
width: 100%;
height: 3rem;
display: flex;
justify-content: flex-end;
align-items: baseline;
border-top: solid #C5C392 1px;
a {
    margin: 0 10px 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%; 
}
`;

const genericIcon = css`
    margin-top: 32px;
    font-size: 3rem;
    vertical-align: center;
    fill: #000;
    color: #000;
    transition: 0.3s ease-in-out;
    &:hover {
        transform: rotate(0.02turn);
        fill: #73A580;
    }

`;

const GithubIcon = styled(AiFillGithub)`
    ${genericIcon}
`;

const FigmaIcon = styled(FiFigma)`
    ${genericIcon}
    fill: none;
    &:hover {
        transform: rotate(-0.02turn);
        fill: none;
        color: #73A580;
    }
`;

const YoutubeIcon = styled(AiOutlineYoutube)`
    ${genericIcon}

`;

const LiveIcon = styled(AiOutlineLink)`
    ${genericIcon}
    &:hover {
        transform: rotate(-0.02turn);
    }
`;


const Info = ( props ) => {
    const { heading, p1, p2, githubLink, figmaLink, liveLink, youtubeLink, reverse, image, landscape } = props
    
    useEffect(() => {
        Aos.init({ duration: 1200});
    }, [])


    const columnLeftAnimation =( r )=> {
        return r ? "slide-left" : "slide-right";
    }
    const columnRightAnimation =( r )=> {
        return r ? "slide-right" : "slide-left";
    }

    const checkFigma =()=> {
        return figmaLink ?
        <a href={ figmaLink }>
            <FigmaIcon />
        </a>
        :
        undefined
    }

    const checkLive =()=> {
        return liveLink ?
        <a href={ liveLink  }>
            <LiveIcon />
        </a>
        :
        undefined
    }

    const checkYoutube =()=> {
        return youtubeLink ?
        <a href={ youtubeLink  }>
            <YoutubeIcon />
        </a>
        :
        undefined
    }

    return (
        <Section id="projects">
            <Container landscape={ landscape }>
                <ColumnLeft reverse={ reverse } data-aos={ columnLeftAnimation(reverse) }>
                    <h1>{ heading }</h1>

                    <p>{ p1 }</p>
                    <LightPara>{ p2 }</LightPara>
                    <IconBar>
                    { checkFigma() }
                    { checkYoutube() }
                    { checkLive() }
                    <a href={ githubLink }>
                    <GithubIcon />
                    </a>
                    
                    </IconBar>
                    
                </ColumnLeft>
                <ColumnRight reverse={ reverse } data-aos={ columnRightAnimation(reverse) }>
                    <img src={ image } alt=":)"/>
                </ColumnRight>
            </Container>
        </Section>

    )
}

export default Info