import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const NavbarRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 4rem;
  border-bottom: 1px solid black;
  
`;

const NavbarHeader = styled.div`
  font-size: 3em;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;


const NavbarModulesContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  padding: 0.5rem;
  gap: 0.5rem;
  justify-content: right;

`;

const NavbarModule = styled.button`
  outline: none;
  box-shadow: none;

  height: 4rem;
  width: 8rem;   
  border-radius: 10%;
  text-align: center;
  border: 0.5rem solid rgb(0,0,0);
  background: rgb(256,256,256);
  color: rgb(0,0,0);

  &:hover {
    background: #ff6e42;
  }
`;

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <NavbarRoot>
      <NavbarHeader>Narasiman Vasudevan</NavbarHeader>
      <NavbarModulesContainer>
        <NavbarModule onClick={() => navigate("/")}>Home</NavbarModule>
        <NavbarModule onClick={() => navigate("/about")}>About</NavbarModule>
        <NavbarModule onClick={() => navigate("/blog")}>Blog</NavbarModule>
        <NavbarModule onClick={() => navigate("/contact")}>Contact</NavbarModule>
      </NavbarModulesContainer>
      </NavbarRoot>
    </>
  )
}

export default Navbar;
