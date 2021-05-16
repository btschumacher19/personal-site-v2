import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import profile from '../../images/profile.jpg';
import { AiFillGithub, AiFillLinkedin, AiFillFilePdf, AiFillMail } from 'react-icons/ai'

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;

    @media screen and (max-width: 768px) {
        height: auto;
    }
`;


const Card = styled.div`
    background-color: #000;
    border-radius: 12px;
    box-shadow: 0px 0px 18px 6px rgb(0 0 0 / 24%);
    margin: 50px auto 0;
    padding: 0 0 0 0;
    width: 768px;
    min-height: fit-content;

    @media screen and (max-width: 768px) {
        width: auto;
    }
`;

const Head = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    height: 200px;
    border-bottom: solid 4px #C5C392;

    img {
    margin-top: 100px;
    position: absolute;
    box-shadow: none;
    border: solid 4px #C5C392;
    height: 200px;
    width: 200px;
    object-fit: contain;
    border-radius: 50%;
    }

    h1 {
        font-family: 'Abril Fatface', cursive;
        letter-spacing: 6px;
        position: absolute;
        color: #fff;
        font-size: 138px;
        white-space: nowrap;
        left: 10px;
        bottom: 0;
        margin: 0 !important;
        padding: 0 !important;
        vertical-align: bottom;
        line-height: 1;

        @media screen and (max-width: 650px) {
            font-size: 19vw;
    }
    }
`;

const Body = styled.div`
    border-radius: 0 0 12px 12px;
    /* margin-top: 100px; */
    background-color: #fff;
    padding: 0 100px 50px 100px;

    @media screen and (max-width: 768px) {
        padding: 30px 50px 30px 50px;
    }
`;

const BodyInner = styled.div`
        padding-top: 100px;
        width: 100%;

        p {
            margin: 20px 0 40px 0;
        }
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
    fill: black;
    transition: 0.3s ease-in-out;
    &:hover {
        transform: rotate(0.02turn);
        fill: #73A580;
    }
`;

const GithubIcon = styled(AiFillGithub)`
    ${genericIcon}
`;

const ResumeIcon = styled(AiFillFilePdf)`
    ${genericIcon}
`;

const LinkedinIcon = styled(AiFillLinkedin)`
    ${genericIcon}
    &:hover {
        transform: rotate(-0.02turn);
    }
`;
const EmailIcon = styled(AiFillMail)`
    ${genericIcon}
    &:hover {
        transform: rotate(-0.02turn);
    }
`;


const InfoTwo =()=> {
    return (
        <Section id="about">
        <Card>
            <Head>
                <h1>
                    About Me.
                </h1>
            <img src={ profile } alt=":)" />

            </Head>
            <Body>
                <BodyInner>
                <p>
                I'm a recent Air Force Veteran driven to make a real impact through technology. I developed an interest for coding while managing a government contract for software services - during that time, I had the chance to see how the product team could take a set of problems, and solve them almost entirely with code. Every day since, my curiosity has lead me to understanding new concepts on how I too, can create and improve upon useful applications.
                </p>
                <IconBar>

                    <a href="https://github.com/btschumacher19" >
                    <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/brendenschumacher" >
                        <LinkedinIcon />
                    </a>
                    <a href="https://resume.creddle.io/resume/g9slkf8q35g">
                        <ResumeIcon />
                    </a>
                    <a href="mailto:brendens@protonmail.com?subject=Nice%20Site!&body=Brenden,">
                        <EmailIcon />
                    </a>
                    
                    </IconBar>
                </BodyInner>
            </Body>

        </Card>
        </Section>
    )
}

export default InfoTwo