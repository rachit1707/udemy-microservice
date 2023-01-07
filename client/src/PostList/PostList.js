import axios from "axios";
import React, {useState,useEffect} from "react";

const PostList = ()=>{
    const [posts, setPosts] = useState({});

    const fetchPosts = async ()=>{
        const result = await axios.get('http://localhost:4000/posts');
        setPosts(result.data);
    }
    useEffect(()=>{
        fetchPosts();
    },[]);

    const renderPosts = Object.values(posts).map(post =>{
        return (
            <div className="card" 
            style={{width:'30%',marginBottom:'20px'}}
            key={post.id}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                </div>
            </div>
        )
    })

    return(
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderPosts}
        </div>
    )
};

export default PostList;