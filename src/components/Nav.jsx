import styled from "@emotion/styled";
import { useState } from "react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container className="container" isOpen={isOpen}>
            <img src="/images/Logo.svg" alt="Logo" />
            <ul>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="" target="_blank">Hire Me</a></li>
            </ul>
            <Burguer isOpen={isOpen} onClick={() => setIsOpen(prev => !prev)}>
                <div></div>
                <div></div>
                <div></div>
            </Burguer>
        </Container>
    )
}
    


export default Nav;

const Burguer = styled.button`
    display: none;

    div {
        width: 32px;
        height: 4px;
        background-color: #343434;
        border-radius: 4px;
        transition: all 1s ease-in-out;
    }

    @media (max-width: 640px) {
        display: flex;
        flex-direction: column;
        gap: 2px;
        ${props => props.isOpen && "transform: rotate(180deg);"}
        div:first-of-type {
            ${props => props.isOpen && "transform: rotate(45deg) translate(2px, 2px);"}
        }
        div:nth-of-type(2) {
            ${props => props.isOpen && "opacity: 0;"}

        }
        div:last-of-type {
            ${props => props.isOpen && "transform: rotate(-45deg) translate(7px, -6px);"}
        }
    }
`

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 24px 48px 0;
    margin-bottom: 64px;
    align-items: center;

    ul {
        display: flex;
        list-style: none;
        gap: 24px;
        transition: all 1s ease-in-out;
    }
    a {
        font-weight: 600;
        transition: all 0.4s ease-in-out;
        color: #343434;

        &:hover {
            color: black;
        }
    }
    
    li:last-of-type {
        a {
            color: #FDFDFD;
            padding: 12px 24px;
            background: #565656;
            border-radius: 8px;

            &:hover {
                background: black;
            }
        }
    }

    img {
        display: block;
        width: 160px;
    }

    @media (max-width: 640px) {
        ul {
            z-index: 1;
            width: 100vw;
            min-width: 440px;
            background: white;
            left: 50%;
            transform: translate(-50%,${props=> props.isOpen? "75%": "-100%"});
            position: absolute;
            flex-direction: column;
            align-items: center;
            padding-bottom: 48px;
        }
        
    }
    @media (max-width: 600px) {
        padding: 24px 20px 0
    }
    
`