import React, { useState, useEffect } from "react";
import axios from 'axios';
import BlogPost from "./BlogPost";
import "./css/Blog.css";

export default function Blog() {

    const [data, setData] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/blogposts`)
            .then((response) => setData(response.data))
            .catch((error) => {
                console.log(error);
            });
    }, []);
    
    return (
        <div className="Blog-wrapper">
            Blog
            {data && data.map((item, i)=> {
                <BlogPost 
                    key={i}
                    title={item.title}
                    date={item.date}
                    postbody={item.postbody}
                    picture={item.picture}
                    keywords={item.keywords}
                />
            })}
        </div>
    )
};