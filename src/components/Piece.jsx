import styled from '@emotion/styled';
import { useState } from 'react';

const Piece = props => {
    const {github, author, link} = props;
    const [height, setHeight] = useState("0");
    return (
        <Container imgHeight={height}>
            <a href={github} target="_blank"><img onLoad={e => setHeight(e.target.clientHeight)} src={`/images/${author}.jpg`} alt={`email by ${author}`} /></a>
            <p><a  href={link}></a></p>
        </Container>
    )
}

export default Piece;

const Container = styled.div`
    border-radius: 16px;
    width: 320px;
    height: 480px;
    position: relative;
    overflow: hidden;
    img {
        transition: all 2s ease-in-out;
        &:hover {
            transform: translateY(${props => 480 - Number(props.imgHeight)}px);
        }
    }
    p {
        position: absolute;
        left: 24px;
        bottom: 40px;
    }
`