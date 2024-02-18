import TerminalEditor from "./TerminalEditor/TerminalEditor";
import { Dropdown } from "./Dropdown/Dropdown";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Home = () => {
    const mode = useSelector((state: RootState) => state.mode.value);
    const editor = useSelector((state: RootState) => state.editor.content);

    return (
        <>  
            {
               mode ? (
                    <Dropdown>
                        <TerminalEditor />
                    </Dropdown>
                ) : (null)
            }
            <h3>
                {editor}
            </h3>
        </>
    )
}

export default Home;
