import React from 'react';
import styled from 'styled-components';
import { Button } from '../Buttons/PrimaryButton';

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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
        padding: .2rem;
        grid-template-columns: 1fr;
        grid-template-rows: 600px;

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
        object-fit: cover;

        @media screen and (max-width: 768px) {
            height: 90%;
        }
    }

    @media screen and (max-width: 768px) {
        order: ${({ reverse }) => (reverse ? '2' : '1')};
    }
`;

const Info = ( props ) => {

    const { heading, p1, p2, buttonLabel, reverse, image } = props
    
    return (
        <Section>
            <Container>
                <ColumnLeft reverse={ reverse }>
                    <h1>{ heading }</h1>
                    <p>{ p1 }</p>
                    <p>{ p2 }</p>
                    <Button  to='/'>{ buttonLabel }</Button>
                </ColumnLeft>
                <ColumnRight reverse={ reverse }>
                    <img src={ image } alt=":)"/>
                </ColumnRight>
            </Container>
        </Section>

    )
}

export default Info