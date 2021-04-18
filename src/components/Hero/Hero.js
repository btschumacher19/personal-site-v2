import React, { useState, useRef, useEffect  } from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from '../Buttons/PrimaryButton';
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoArrowForward, IoArrowBack  } from 'react-icons/io5'

const hunned = css`
    height: 100%;
    width: 100%;
`;

const centerFlex = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;

    @media screen and (max-width: 768px) {
        right: 20px;
    }
    /* overflow: hidden; */
`;

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

const HeroImage = styled.img`
   position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
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
    @media screen and (max-width: 768px) {
        position: absolute;
        left: 20px;
    }
    
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background-color: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 9px -1px, rgba(0, 0, 0, 0.3) 0px 6px 6px -1px;;
    }

    @media screen and (max-width: 768px) {
        margin-right: .8rem;
    }
`;

const BackArrow = styled(IoArrowBack)`
    ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`;


const Hero = ({ slides }) => {
    const [ slideImage, setSlideImage ] = useState(0)
    const timeout = useRef(null)

    // useEffect(() => {
    //     const nextSlide =()=> {
    //         setSlideImage(slideImage => (slideImage === slides.length-1 ? 0 : slideImage+1))
    //     }
    //     timeout.current = setTimeout(nextSlide, 4000)

    //     return function () {
    //         if(timeout.current) {
    //             clearTimeout(timeout.current)
    //         }
    //     }
    // }, [slideImage, slides.length])

    const nextSlide = () => {
        const slide = (slideImage === slides.length-1 ? 0 : slideImage+1)
        setSlideImage(slide)
        console.log(slideImage)
    }

    const prevSlide = () => {
        const slide = (slideImage === 0 ? slides.length-1 : slideImage-1)
        setSlideImage(slide)
        console.log(slideImage)
    }

    if(!Array.isArray(slides) || slides.length<=0) {
        return null
    }

    return (
        <HeroPage>
            <HeroWrapper>
            {
                slides.map((slide, idx) => {
                    return (
                    <HeroSlide key={ idx } >
                        {idx === slideImage && (
                            <HeroSlider>
                            <HeroImage src={slide.image} alt={slide.alt} />
                                <HeroItems> 
                                    <h1>{slide.title}</h1>
                                    <p>{slide.description}</p>
                                    <Button to={slide.path} primary='true' css={`max-width: 160px;`}>
                                        Click Me<Arrow/>
                                    </Button>
                                </HeroItems>
                                </HeroSlider>
                        )}
                    </HeroSlide>
                )}
                )}
            <SliderButtons>
                <BackArrow onClick={ prevSlide }/>
                <NextArrow onClick={ nextSlide } />
            </SliderButtons>
            </HeroWrapper>
        </HeroPage>
    )
}

Hero.propTypes = {

}

export default Hero

