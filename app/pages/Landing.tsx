import { LandingData } from "interfaces/LandingData";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Landing: React.FC = () => {
    const { greeting } = useLoaderData() as LandingData

    return <>
        <h1>{greeting}</h1>
        <Link to={'/blog/posts'}>Blog</Link>
    </>
}


export default Landing