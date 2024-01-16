import { BlogData } from "interfaces/BlogData";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Blog: React.FC = () => {
    const { posts } = useLoaderData() as BlogData 

    return <>
        <h1>Blog</h1>
        {
            posts?.map((post, i) => <div key={`posts-${i}`}>{post}</div>)
        }
        <Link to={'/'}>Home</Link>
    </>
}

export default Blog