import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";

const Contact = () => {
    const { ref, inView } = useInView({triggerOnce:true});
    return (
    <Container id="contact" className="container" inView={inView}>
        <h2>Contact</h2>
        <div ref={ref}>
            <p><a href="https://github.com/CDirRyo" target="_blank"><img src="/images/mdi_github.svg" alt="github"/>&nbsp;CDirRyo</a></p>
            <p><a href="https://www.linkedin.com/in/carlo-ryoshin-81985216a/" target="_blank"><img src="/images/mdi_linkedin.svg" alt="linkedin"/>&nbsp;Carlo Ryoshin</a></p>
            <p><a href="https://www.fiverr.com/ryoshin" target="_blank"><img src="/images/jam_fiverr-square.svg" alt="fiverr"/>&nbsp;ryoshin</a></p>
            <p><a target="_blank" href="mailto: cryofreelance@gmail.com"><img src="/images/material-symbols_alternate-email-rounded.svg" alt="email"/>&nbsp;cryofreelance@gmail.com</a></p>
        </div>
    </Container>
    )
}
    


export default Contact;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 620px;
    gap: 64px;
    div {
        transition: all 1s ease-in-out;
        ${props => props.inView? "opacity: 1; transform: translateX(0%);" : "opacity: 0; transform: translateX(-50%);"}
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        gap: 16px 32px;
    }
    a {
        display: flex;
        align-items: center;
        color: #343434;
    }

    @media (max-width: 600px) {
        gap: 44px;
        img {
            width: 32px;
        }
    }
`