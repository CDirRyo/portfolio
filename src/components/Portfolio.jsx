import { useState } from "react";
import Piece from "./Piece";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
    const { ref, inView } = useInView({triggerOnce: true});
    const [currentPiece, setCurrentPiece] = useState(0);
    const pieces = [{
        author: "ikhokha",
        github: "https://cdirryo.github.io/iKhokha-clone-email/",
    },
    {
        author: "appfigures",
        github: "https://cdirryo.github.io/appfigures-clone-email/",
    },
    {
        author: "appfigures",
        github: "https://github.com",
    },
    {
        author: "appfigures",
        github: "https://github.com",
    }];
    return (
        <Container id="portfolio" className="container" ref={ref} inView={inView}>
            <Header>
                <h1>Hi, I’m Carlo. I’m a Front End and Email Developer.</h1>
                <p>Need my help? Let’s chat<a href="#contact"></a></p>
            </Header>
            <Carrousel currentPiece={currentPiece}>
                <button onClick={() => currentPiece > 0 && setCurrentPiece(prev => prev - 1)}>
                    <img src="/images/material-symbols_arrow-back-ios-rounded.svg" alt="previous piece" />
                </button>
                <div>
                    <div>
                        {pieces.map((piece, key) => <Piece key={key} github={piece.github} author={piece.author} link={piece.link} />)}
                    </div>
                </div>
                <button onClick={() => currentPiece < 3 && setCurrentPiece(prev => prev + 1)}>
                <img src="/images/material-symbols_arrow-forward-ios-rounded.svg" alt="next piece" />
                </button>
            </Carrousel>
        </Container>
        
    )
}

export default Portfolio;

const Carrousel = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    
    & > div {
        width: 320px;
        display: flex;
        overflow: hidden;
       & > div {
            transition: all 0.4s ease-in-out;
            display:flex;
            transform: translateX(-${props => 320 * props.currentPiece}px);
        }
    }

`

const Container = styled.div`
    ${props => props.inView? "opacity: 1; transform: translateY(0%);" : "opacity: 0; transform: translateY(-50%);"}
    transition: all 2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;

    @media (max-width: 910px) {
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }
`

const Header = styled.div`
    max-width: 40%;
    & > p {
        margin-top: 8px;
        color: #6C6C6C;
    }
    @media (max-width: 910px) {
        max-width: 80%;
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }
`
