import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import BlogItem from "../components/BlogItem/BlogItem";


const ListOfBlogs = styled.ul`
    position: relative;
    width: 30%;
    margin: auto;
    margin-top: 3rem;    
`;

const Blog = () => {
    const [listOfBlogs, setListOfBlogs] = useState<any>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await axios.get("/api/blogs")
            setListOfBlogs(response.data);
        }
        fetchBlogs();
    }, []);



    return (
        <ListOfBlogs>
            {
                listOfBlogs.map((blog: any) => {
                    return <BlogItem {...blog} />
                })
            }
        </ListOfBlogs >
    )
}

export default Blog;