import styled from "styled-components";


interface DropdownProps {
    children?: React.JSX.Element,
};

const Container = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

export const Dropdown = (props: DropdownProps) => {
    return (
        <Container>
            {props.children}
        </Container>
    )   
}
