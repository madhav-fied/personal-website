import { useState } from "react";
import TerminalEditor from "./TerminalEditor/TerminalEditor";

const Home = () => {
    const [content, setContent] = useState('');

    const handleUpdate = ({editor}: any) => {
        console.log(editor.getHTML());
    }

    return (
       <TerminalEditor onUpdate={handleUpdate}/>
    )
}

export default Home;
