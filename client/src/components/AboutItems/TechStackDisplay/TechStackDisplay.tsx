import styled from "styled-components";
import CSSIcon from "../../Icons/SVGs/CSSIcon";
import StorybookIcon from "../../Icons/SVGs/StorybookIcon";
import ReactIcon from "../../Icons/SVGs/ReactIcon";
import PNPMIcon from "../../Icons/SVGs/PNPMIcon";
import CypressIcon from "../../Icons/SVGs/CypressIcon";
import GithubActionsIcon from "../../Icons/SVGs/GithubActionsIcon";
import GitIcon from "../../Icons/SVGs/GitIcon";
import HTMLIcon from "../../Icons/SVGs/HTMLIcon";
import JavascriptIcon from "../../Icons/SVGs/JavascriptIcon";
import NodeJSIcon from "../../Icons/SVGs/NodeJSIcon";
import KubernetesIcon from "../../Icons/SVGs/KubernetesIcon";
import NPMIcon from "../../Icons/SVGs/NPMIcon";

const OuterBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 3rem;
`;

const TechStackGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
`;

const Divider = styled.hr`
    height: 6rem;
`;

export const TechStackDisplay = () => {
    return (
        <OuterBox>
            <h1>Tech<br /> Stack</h1>
            <Divider />
            <TechStackGrid>
                <HTMLIcon />
                <CSSIcon />
                <JavascriptIcon />
                <NodeJSIcon />
                <ReactIcon />
                <StorybookIcon />
                <GitIcon />
                <CypressIcon />
                <NPMIcon />
                <PNPMIcon />
                <KubernetesIcon />
                <GithubActionsIcon />
            </TechStackGrid>
        </OuterBox>
    )
};

