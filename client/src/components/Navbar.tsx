import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../app/store";
import { switchMode } from "../app/reducers/modeSlice";


const NavbarRoot = styled.div`
  display: flex;
  // flex-direction: row;
  // justify-content: space-between;
  // padding: 0.5rem 4rem;
  border-bottom: 1px solid black;
  position: relative;
  flex-direction: column;
  justify-content: space-evenly; 
  padding-bottom: 1rem;
`;

const NavbarHeader = styled.div`
  // for old
  // font-size: 3em;
  
  font-size: 2em;
  margin: auto;
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
  gap: 1rem;
  justify-content: right;
  margin: auto;
  `;

const NavbarModule = styled.button`
  outline: none;
  box-shadow: none;

  border-radius: 10%;
  text-align: center;
  border: 0.1rem solid rgb(0,0,0);
  background: rgb(256,256,256);
  color: rgb(0,0,0);
  width: 4rem;
  height: 2 rem;
  
  // for old
  // height: 4rem;
  // width: 8rem;   

  &:hover {
    // background: #ff6e42;
    color: rgb(256,256,256);
    background: rgb(0,0,0);
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
          <NavbarHeader onClick={() => navigate("/")}>Satori Collectives</NavbarHeader>
          {/* <NavbarModule onClick={changeMode}>Shell Mode</NavbarModule> */}
        </NavbarHeaderContainer>

        {
          !mode ? (
            <NavbarModulesContainer>
              <NavbarModule onClick={() => navigate("/about")}>About</NavbarModule>
              <NavbarModule onClick={() => navigate("/blog")}>Blog</NavbarModule>
              <NavbarModule onClick={() => navigate("/work")}>Work</NavbarModule>
              <NavbarModule onClick={() => navigate("/contact")}>Contact</NavbarModule>
            </NavbarModulesContainer>
          ) : null
        }

      </NavbarRoot>
    </>
  )
}

export default Navbar;
