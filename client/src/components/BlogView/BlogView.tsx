import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Markdown from 'react-markdown'

const BlogContainer = styled.div`
    width: 60%;
    margin: auto;
    margin-top: 3rem;

    border: 1px solid black;
`;

const BlogView = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [blogContent, setBlogContent] = useState('');

    useEffect(() => {
        const getBlog = async () => {
            const blogId = searchParams.get('blogId');
            const blog = await axios.get(`/api/blogs/${blogId}`);
            console.log(blog.data.content);
            setBlogContent(blog.data.content);
        }

        getBlog();
    }, []);

    return (
        <BlogContainer>
            <Markdown>
                {blogContent}
            </Markdown>
        </BlogContainer>
    )
}

export default BlogView;
