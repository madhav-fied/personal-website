import TerminalEditor from "./TerminalEditor/TerminalEditor";
import { Dropdown } from "./Dropdown/Dropdown";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Home = () => {
    const mode = useSelector((state: RootState) => state.mode.value);

    return (
        <>  
            {
               mode ? (
                    <Dropdown>
                        <TerminalEditor />
                    </Dropdown>
                ) : (null)
            }
        </>
    )
}

export default Home;
