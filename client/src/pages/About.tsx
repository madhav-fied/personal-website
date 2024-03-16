import styled from "styled-components";
import AboutHeader from "../components/AboutItems/AboutHeader/AboutHeader";
import CareerExperience from "../components/AboutItems/CareerExperience/CareerExperience";
import { TechStackDisplay } from "../components/AboutItems/TechStackDisplay/TechStackDisplay";

const Separator = styled.hr`
    border: 0.3rem solid black;
    border-radius: 0.6rem;
    width: 75%;
`;

const Container = styled.div`
    width: 50%;
    margin: auto;
    margin-top: 3rem;
    padding: 0.5rem;
`;

const Divider = styled.hr`

`;


const About = () => {

    return (
        <>
            <Container>
                <AboutHeader />
                <Divider />
                <CareerExperience />
                <Divider />
                <TechStackDisplay />
            </Container>
            <Separator />
        </>
    )
}

export default About;
