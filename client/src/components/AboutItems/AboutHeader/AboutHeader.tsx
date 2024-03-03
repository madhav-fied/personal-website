import styled from "styled-components";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedInIcon";
import MailIcon from "../../Icons/MailIcon";

const IntroBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 3rem;
`;

const ContactBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 1rem;
`;

const MainName = styled.h1`
    text-align: left;
`;

const Job = styled.h2`
    text-align: center;
`;

const Divider = styled.hr`
    height: 3rem;
`;

const AboutHeader = () => {

    return (
        <IntroBox>
            <MainName>Vanakkam,<br />I am Narasiman</MainName>
            <Divider />
            <Job>Computer Science<br />Engineer</Job>
            <Divider />
            <ContactBox>
                <GithubIcon />
                <LinkedinIcon />
                <MailIcon />
            </ContactBox>
        </IntroBox>
    );
}

export default AboutHeader;