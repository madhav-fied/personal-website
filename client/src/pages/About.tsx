import styled from "styled-components";
import LinkedinIcon from "../components/Icons/LinkedInIcon";
import GithubIcon from "../components/Icons/GithubIcon";
import MailIcon from "../components/Icons/MailIcon";

const Separator = styled.hr`
    border: 0.3rem solid black;
    border-radius: 0.6rem;
    width: 75%;
`;

const Container = styled.div`
    width: 60%;
    margin: auto;
    margin-top: 3rem;
    padding: 0.5rem;

    border: 1px solid black;
`;

const About = () => {

    return (
        <>
            <Container>
                <h1>Vanakkam,<br />I am Narasiman</h1>
                <hr />
                <h3>Computer Science Engineer</h3>
                <GithubIcon />
                <LinkedinIcon />
                <MailIcon />
            </Container>
            <Separator />

        </>
    )
}

export default About;
