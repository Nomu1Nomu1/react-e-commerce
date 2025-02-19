import React from "react";
import '../styles.css';
import { Helmet } from "react-helmet";

const Head = () => {
    return (
        <Helmet>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Tailwind Starter Template - Nordic Shop</title>
            <meta name="description" content="Free open source Tailwind CSS Store template" />
            <meta name="keywords" content="tailwind,tailwindcss,tailwind css,css,starter template,free template,store template, shop layout, minimal, monochrome, minimalistic, theme, nordic" />
            <link
                rel="stylesheet"
                href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap"
                rel="stylesheet"
            />
            
        </Helmet>
    );
};

export default Head;