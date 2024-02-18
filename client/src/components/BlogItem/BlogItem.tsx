import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BlogItemContainer = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    width: 100%;
`;

const Blog = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
`

const BlogItem = ({ title, date, id }: any) => {
    const [mouseOver, setMouseOver] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <BlogItemContainer 
                id={id} 
                onMouseOver={() => setMouseOver(true)} 
                onMouseOut={() => setMouseOver(false)}
                onClick={() => navigate(`/blog/view?blogId=${id}`)}
            >
                <Blog>
                    <p>{title}</p>
                    <p>{date}</p>
                </Blog>
            </BlogItemContainer>
            {
                mouseOver && <hr /> 
            }
        </>
    )
}

export default BlogItem;
