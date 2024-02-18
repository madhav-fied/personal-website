import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../app/store";
import { switchMode } from "../app/reducers/modeSlice";


const NavbarRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 4rem;
  border-bottom: 1px solid black;
  position: relative; 
`;

const NavbarHeader = styled.div`
  font-size: 3em;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavbarHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  gap: 1.5rem;
  justify-content: space-between;
  position: relative;
`;


const NavbarModulesContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  gap: 0.5rem;
  justify-content: right;
  position: relative;
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
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.mode.value)

  const changeMode = async() => {
    dispatch(switchMode());
  }

  return (
    <>
      <NavbarRoot>
        <NavbarHeaderContainer>      
          <NavbarHeader onClick={() => navigate("/")}>Narasiman Vasudevan</NavbarHeader>
          <NavbarModule onClick={changeMode}>Shell Mode</NavbarModule>
        </NavbarHeaderContainer>

        {
          !mode ? (
            <NavbarModulesContainer>
              <NavbarModule onClick={() => navigate("/about")}>About</NavbarModule>
              <NavbarModule onClick={() => navigate("/blog")}>Blog</NavbarModule>
              <NavbarModule onClick={() => navigate("/contact")}>Contact</NavbarModule>
            </NavbarModulesContainer>
          ) : null
        }

      </NavbarRoot>
    </>
  )
}

export default Navbar;
