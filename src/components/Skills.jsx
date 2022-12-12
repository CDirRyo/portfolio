import styled from "@emotion/styled";
import Skill from "./Skill"
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    const { ref, inView } = useInView({triggerOnce: true, threshold: 0.25});
    const skills = [{
        name: "HTML",
        percentage: "95%"
    },
    {
        name: "CSS",
        percentage: "90%"
    },
    {
        name: "JavaScript",
        percentage: "90%"
    },
    {
        name: "React",
        percentage: "85%"
    },
    {
        name: "MJML",
        percentage: "90%"
    },
    {
        name: "Sass",
        percentage: "80%"
    },
    {
        name: "TailwindCSS",
        percentage: "75%"
    },
    {
        name: "Git/GitHub",
        percentage: "80%"
    },
    {
        name: "Figma",
        percentage: "80%"
    },
    {
        name: "Photoshop",
        percentage: "75%"
    }
    
]
    return (
        <Container id="skills" className="container">
            <h2>Skills</h2>
            <div ref={ref}>
                {skills.map((skill, index) => <Skill key={index} name={skill.name} percentage={inView? skill.percentage : "0%"}/>)}
            </div>
        </Container>    
    )
}

export default Skills;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
    align-items: center;
    & > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 784px;
        max-width: 100%;
        gap: 56px;
    }

    @media (max-width: 600px) {
        gap: 44px;

        & > div {
            gap: 32px;
        }
    }
`