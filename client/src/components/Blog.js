import React, { useState, useEffect } from "react";
import axios from 'axios';
import BlogPost from "./BlogPost";
import "./css/Blog.css";

export default function Blog() {

    const [data, setData] = useState();
    const [keywLinks, setKeywLinks] = useState([]);

    useEffect(() => {
        axios
            .get(`/api/blogposts`)
            .then((response) => setData(response.data.reverse()))
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Handle keywords display
    useEffect(() => {
        const tempKeywords = []
        const filteredKeywords = []

        data && data.forEach((item)=> {
            
            const separate = item.keywords.split(",")
            tempKeywords.push(...separate)
            function filtered(){
                const filterThem = tempKeywords.filter((v, i, a) => a.indexOf(v) === i)
                filteredKeywords.push(filterThem)
                return filterThem
            }

            setKeywLinks(filtered());
        })
    }, [data]);
    
    return (
        <div className="Blog-wrapper">
            Blog
            <div className="Blog-keyword-wrapper">
                {keywLinks && keywLinks.map((item)=>{
                    return(
                        <div className="Blog-keywords">
                            <a href="">{item}</a>
                        </div>
                    )
                })}
            </div>
            {data && data.map((item, i)=> {
                return ( 
                    <BlogPost 
                        key={i}
                        title={item.title}
                        date={item.date}
                        postbody={item.postbody}
                        picture={item.picture}
                        keywords={item.keywords}
                    />
                )}
            )}
        </div>
    )
};