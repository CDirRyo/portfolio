import styled from '@emotion/styled';
import { useState } from 'react';

const Piece = props => {
    const {github, author} = props;
    const [height, setHeight] = useState("0");
    return (
        <Container imgHeight={height}>
            <a href={github} target="_blank"><img onLoad={e => setHeight(e.target.clientHeight)} src={`/images/${author}.jpg`} alt={`email by ${author}`} /></a>
        </Container>
    )
}

export default Piece;

const Container = styled.div`
    border-radius: 16px;
    width: 320px;
    height: 400px;
    position: relative;
    overflow: hidden;
    img {
        width: 320px;
        transition: all 2s ease-in-out;
        &:hover {
            transform: translateY(${props => 400 - Number(props.imgHeight)}px);
        }
    }

`