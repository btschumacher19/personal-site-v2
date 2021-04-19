import React, { useState, useRef, useEffect  } from 'react';
import styled, { css } from 'styled-components/macro';

import { Button } from '../Buttons/PrimaryButton';
import { IoMdArrowRoundForward } from 'react-icons/io'
import Aos from 'aos';
import 'aos/dist/aos.css'

const hunned = css`
    height: 100%;
    width: 100%;
`;

const centerFlex = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const image = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

// const SliderButtons = styled.div`
//     position: absolute;
//     bottom: 50px;
//     right: 50px;
//     display: flex;
//     z-index: 10;

//     @media screen and (max-width: 768px) {
//         right: 20px;
//     }
// `;

const HeroPage = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

const HeroWrapper = styled.div`
    position: relative;
    ${hunned}
    ${centerFlex}
    overflow: hidden;
`;

const HeroSlide = styled.div`
    z-index: 1;
    ${hunned}
`;

const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    ${hunned};
    ${centerFlex}

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(0deg,
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.2) 50%
            rgba(0,0,0,0.2) 100%)
    }
`;

const HeroImageUnder = styled.img`
    ${image}
`;

const HeroImage = styled.img`
    ${image}
    filter: blur(8px);
    -webkit-filter: blur(8px);
`;


const HeroItems = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    height: auto;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    padding: 0 15px 0 15px;
    color: #fff;

    h1 {
        /* responsive font sizing, min / calculated/ max */
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 0 0 20px rgba(0,0,0,0.4);
        margin-bottom: 0.8rem;
    }

    p {
        margin-bottom: 1.2rem;
        text-shadow: 0 0 20px rgba(0,0,0,0.4);
    }

    
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;

// const arrowButtons = css`
//     width: 50px;
//     height: 50px;
//     color: #fff;
//     cursor: pointer;
//     background-color: #000d1a;
//     border-radius: 50px;
//     padding: 10px;
//     margin-right: 1rem;
//     user-select: none;
//     transition: 0.3s;
//     box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    
//     &:hover {
//         transform: translateY(-2px);
//         box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 9px -1px, rgba(0, 0, 0, 0.3) 0px 6px 6px -1px;;
//     }

//     @media screen and (max-width: 768px) {
//         margin-right: .8rem;
//     }
// `;

// const BackArrow = styled(IoArrowBack)`
//     ${arrowButtons}
// `;

// const NextArrow = styled(IoArrowForward)`
//     ${arrowButtons}
// `;

const Card = styled.div`
    z-index: 2;
    width: 80%;
    border-bottom: solid 1px #C5C392;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    
    h1 {
        color: #fff;
        font-size: 3.8rem;

        @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
    }

    h2 {
        color: #fff;
        font-size: 3rem;
        font-weight: 500;
        @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
    }
    
    & .myName {
        font-size: 3.5rem;
        background: none;
        color: #92d1a2;
        font-weight: 700;
        transition: 0.3s ease-in-out;

        &:hover {
        transform: rotate(-0.01turn) scale(1.1);

        }

        @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
    }
    div {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        white-space: nowrap;
        align-items: baseline;
    }

    
`;

const NoWrap = styled.span`
    white-space: nowrap;
`;


const Hero = () => {

    return (
        <HeroPage id="top">
            <HeroWrapper>
            

                    <HeroSlide >
                        
                            <HeroSlider>
                            {/* <HeroImageUnder src='https://media.giphy.com/media/3o7aD4CxCohSTe5vzO/giphy.gif' alt="ll" /> */}
                            <HeroImageUnder src='../../images/rain.gif' alt="ll" />
                            <HeroImage src='../../images/rain.gif' alt="ll"/>

                                <Card  > 
                                    <div><h1 data-aos={ "slide-up" }>Hello, I'm&nbsp;</h1><span data-aos={ "slide-down" } className="myName">Brenden.</span></div>
                                    <h2 data-aos={ "slide-left" }>Full Stack <NoWrap>Software Engineer</NoWrap></h2>
                                    <br/>
                                </Card>
                                </HeroSlider>
                        
                    </HeroSlide>
                
                
            {/* <SliderButtons>
                <BackArrow onClick={ prevSlide }/>
                <NextArrow onClick={ nextSlide } />
            </SliderButtons> */}
            </HeroWrapper>
        </HeroPage>
    )
}

Hero.propTypes = {

}

export default Hero

