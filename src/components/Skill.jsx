import styled from '@emotion/styled';

const Skill = (props) => {
    const {name, percentage} = props;
    return (
        <Container percentage={percentage}>
            <p>{name}</p>
            <div>
                <div></div>
            </div>
        </Container>
    )
} 

export default Skill;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 360px;

    & > div {
        width: 220px;
        height: 10px;
        background: #d0d0d0;
    }

    & > div > div {
        transition: all 2s ease-in-out;
        width: ${props => props.percentage};
        height: 100%;
        background: #343434;
        border-radius: 0 4px 4px 0;
    }

    @media (max-width: 600px) {
        & > div {
            height: 8px;
        }
    }
`